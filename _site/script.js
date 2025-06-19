// script.js - Handles dynamic content loading, search, filtering, and pagination

// Ensure allMovies array is loaded from movies.js before script.js runs.
// movies.js MUST be loaded BEFORE script.js in your HTML files.
// Example:
// <script src="movies.js"></script>
// <script src="script.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    // Determine the current HTML file name (e.g., 'index.html', 'movies.html', or 'index.njk')
    const pathParts = window.location.pathname.split('/').filter(part => part !== '');
    let currentPage = pathParts.pop() || 'index.html'; // Defaults to 'index.html' if path is empty (root)
    if (currentPage.endsWith('.html')) {
        // Keep as is if it's already an HTML file
    } else if (currentPage === 'TheMovieHub') { // Special case for your base path if you visit the root
        currentPage = 'index.html';
    } else {
        // If it's something like /TheMovieHub/ and no specific file, assume index.html
        currentPage = 'index.html';
    }
    console.log("Current Page (determined):", currentPage); // Added for debugging current page name

    // --- Common Elements (present on both index.njk and movies.html) ---
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearSearchButton = document.getElementById('clear-search-button');
    const genreFiltersContainer = document.getElementById('genre-filters');
    const searchResultsInfo = document.getElementById('search-results-info');
    // movieGrid is the main grid for all movies on movies.html, and a general reference
    const movieGrid = document.getElementById('movie-grid');
    // Corrected ID for pagination container
    const paginationContainer = document.getElementById('pagination-controls'); 

    let currentSearchTerm = '';
    let currentGenreFilter = 'All';
    let currentPageNumber = 1;
    // Set how many movies should appear per page on the 'All Movies' (movies.html) page
    const moviesPerPage = 15;

    let displayedMovies = []; // Stores movies that match current search/filter criteria

    // --- Function to render movies to a specific HTML grid element ---
    function renderMovies(moviesToRender, targetGridId) {
        const targetGrid = document.getElementById(targetGridId);
        // If the target grid element doesn't exist on the current page, log an error and exit
        if (!targetGrid) {
            console.error(`Error: Target grid with ID '${targetGridId}' not found on this page.`);
            return;
        }

        targetGrid.innerHTML = ''; // Clear any existing content in the grid

        // If no movies match the criteria, display a "No movies found" message
        if (moviesToRender.length === 0) {
            targetGrid.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <p class="text-gray-700 text-xl">No movies found matching your current filters.</p>
                    <p class="text-gray-500 mt-2">Try adjusting your search or genre filter.</p>
                </div>
            `;
            return;
        }

        // Loop through the movies to render and create a card for each
        moviesToRender.forEach(movie => {
            const movieCard = document.createElement('div');
            // Add Tailwind CSS classes for styling, responsiveness, and hover effects
            movieCard.classList.add(
                'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden',
                'transform', 'hover:scale-105', 'transition', 'duration-300', 'ease-in-out'
            );

            // Create the HTML content for each movie card
            // Includes image (with error fallback), title, truncated description, genres, and a "View Details" link
            let posterHtml = '';
            if (movie.posterUrl) {
                // Corrected: Prepend window.eleventyPathPrefix to the movie.posterUrl
                posterHtml = `<img src="${window.eleventyPathPrefix + movie.posterUrl}" alt="${movie.title} Poster" class="w-full h-72 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/300x450/cccccc/333333?text=Image+Missing';">`;
            } else {
                // Default placeholder if movie.posterUrl is missing or empty
                posterHtml = `<img src="https://placehold.co/300x450/cccccc/333333?text=Image+Missing" alt="Image Missing" class="w-full h-72 object-cover">`;
            }

            // Fixed: Safely access movie.genres by defaulting to an empty array if undefined/null
            const genresHtml = (movie.genres || []).map(genre => `<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${genre}</span>`).join('');

            movieCard.innerHTML = `
                ${posterHtml}
                <div class="p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${movie.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${movie.description.substring(0, 100)}...</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${genresHtml}
                    </div>
                    {# Corrected: Prepend window.eleventyPathPrefix to the "View Details" link #}
                    <a href="${window.eleventyPathPrefix}movie-detail.html?id=${movie.id}" class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">View Details</a>
                </div>
            `;
            targetGrid.appendChild(movieCard); // Add the newly created movie card to the grid
        });
    }

    // --- Function to render pagination buttons at the bottom of the movie list ---
    function renderPagination(totalMovies) {
        // Only render pagination if the container exists (i.e., on movies.html)
        if (!paginationContainer) {
            console.warn("Pagination container not found. Skipping pagination render.");
            return;
        }

        paginationContainer.innerHTML = ''; // Clear existing pagination buttons
        const totalPages = Math.ceil(totalMovies / moviesPerPage); // Calculate total number of pages

        if (totalPages <= 1) return; // If only one page or less, no pagination is needed

        // Create a button for each page
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i; // Set button text to page number
            // Add Tailwind CSS classes for styling pagination buttons
            button.classList.add(
                'px-4', 'py-2', 'rounded-md', 'font-semibold',
                'transition', 'duration-200', 'ease-in-out',
                ...(currentPageNumber === i ? ['bg-blue-600', 'text-white', 'shadow-lg'] : ['bg-gray-200', 'text-gray-800', 'hover:bg-blue-200'])
            );
            // Add click event listener to change page and re-render movies
            button.addEventListener('click', () => {
                currentPageNumber = i; // Update current page number
                filterAndRenderMovies(); // Re-render movies for the new page
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top of the page
            });
            paginationContainer.appendChild(button); // Add button to the pagination container
        }
    }

    // --- Main filtering and rendering logic for movies ---
    function filterAndRenderMovies() {
        // --- DIAGNOSTIC LOG: Check initial allMovies length ---
        console.log('--- filterAndRenderMovies START ---');
        // Ensure allMovies is available from movies.js
        if (typeof allMovies !== 'undefined') {
            console.log('allMovies array loaded. Total movies:', allMovies.length);
        } else {
            console.error('ERROR: allMovies array is UNDEFINED. Check movies.js loading order and syntax.');
            return; // Exit if allMovies is not defined
        }

        let processedMovies = allMovies;

        // Apply genre filter if a specific genre is selected (not 'All')
        if (currentGenreFilter !== 'All') {
            processedMovies = processedMovies.filter(movie => movie.genres && movie.genres.includes(currentGenreFilter));
            console.log('After genre filter:', processedMovies.length, 'movies.');
        }

        // Apply search term filter if a search term is entered
        if (currentSearchTerm) {
            const lowerCaseSearchTerm = currentSearchTerm.toLowerCase();
            processedMovies = processedMovies.filter(movie =>
                (movie.title && movie.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (movie.description && movie.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (movie.genres && movie.genres.some(genre => genre.toLowerCase().includes(lowerCaseSearchTerm)))
            );
            console.log('After search filter:', processedMovies.length, 'movies.');
        }

        // Sort movies by year in descending order to show latest movies first
        processedMovies.sort((a, b) => (b.year || 0) - (a.year || 0));
        console.log('After sorting, processedMovies length:', processedMovies.length);

        // Now, assign the fully filtered and sorted list to displayedMovies
        displayedMovies = processedMovies;
        console.log('displayedMovies length (before pagination slice):', displayedMovies.length);


        // Update the search results info text to show how many results are displayed
        if (searchResultsInfo) {
            if (currentSearchTerm || currentGenreFilter !== 'All') {
                searchResultsInfo.textContent = `Displaying ${displayedMovies.length} results.`;
            } else {
                searchResultsInfo.textContent = ''; // Clear the message if no filters are applied
            }
        }

        // Logic specific to the 'movies.html' page
        if (currentPage === 'movies.html') {
            const startIndex = (currentPageNumber - 1) * moviesPerPage;
            const endIndex = startIndex + moviesPerPage;
            const paginatedMovies = displayedMovies.slice(startIndex, endIndex);

            console.log('movies.html: startIndex:', startIndex, 'endIndex:', endIndex, 'paginatedMovies length:', paginatedMovies.length);

            renderMovies(paginatedMovies, 'movie-grid');
            renderPagination(displayedMovies.length);
        }
        // Logic specific to the 'index.html' (homepage)
        else if (currentPage === 'index.html') {
            const latestMoviesGrid = document.getElementById('latest-movie-grid');
            if (latestMoviesGrid) {
                const moviesToShow = displayedMovies.slice(0, 5); // Display only the first 5 for "Latest Movies"
                console.log('index.html: Showing first 5 latest movies. Actual count:', moviesToShow.length);
                renderMovies(moviesToShow, 'latest-movie-grid');
            }
        }
        console.log('--- filterAndRenderMovies END ---');
    }

    // --- Event Listeners for User Interactions ---

    // Event listener for search input (when Enter key is pressed)
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                currentSearchTerm = searchInput.value.trim();
                currentPageNumber = 1;
                filterAndRenderMovies();
            }
        });
    }

    // Event listener for the explicit Search button click
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            currentSearchTerm = searchInput.value.trim();
            currentPageNumber = 1;
            filterAndRenderMovies();
        });
    }

    // Event listener for the Clear Search button
    if (clearSearchButton) {
        clearSearchButton.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchTerm = '';
            currentPageNumber = 1;
            filterAndRenderMovies();
        });
    }

    // Event listener for genre filter buttons (delegated to the container)
    if (genreFiltersContainer) {
        genreFiltersContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('genre-button')) {
                document.querySelectorAll('.genre-button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                currentGenreFilter = e.target.dataset.genre;
                currentPageNumber = 1;
                filterAndRenderMovies();
            }
        });
    }

   // --- Initial Render ---
   // For movies.html, render immediately.
   // For index.html (homepage), add a small delay to ensure allMovies is fully parsed
   // before attempting to render "Latest Movies", as there can be a race condition.
   if (currentPage === 'index.html') {
        setTimeout(() => {
            filterAndRenderMovies();
        }, 100); // 100 milliseconds delay
   } else {
        filterAndRenderMovies();
   }
});