// script.js - Handles dynamic content loading, search, filtering, and pagination

// Ensure allMovies array is loaded from movies.js before script.js runs.
// movies.js MUST be loaded BEFORE script.js in your HTML files.
// Example:
// <script src="movies.js"></script>
// <script src="script.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded fired. Script execution started."); // Added for debugging

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
    console.log("Current Page (determined):", currentPage);

    // --- Common Elements (present on both index.njk and movies.html) ---
    // Moved declarations here to ensure they are available early
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    // ADDED DEBUG LOGS HERE
    console.log("DEBUG: searchInput element (should not be null):", searchInput);
    console.log("DEBUG: searchButton element (should not be null):", searchButton);

    const clearSearchButton = document.getElementById('clear-search-button'); // This ID might not exist in your current HTML
    const genreFiltersContainer = document.getElementById('genre-filters');
    const searchResultsInfo = document.getElementById('search-results-info');
    const movieGrid = document.getElementById('movie-grid');
    const paginationContainer = document.getElementById('pagination-controls'); 

    let currentSearchTerm = '';
    let currentGenreFilter = 'All';
    let currentPageNumber = 1;
    const moviesPerPage = 15;

    let displayedMovies = []; // Stores movies that match current search/filter criteria

    // --- Function to render movies to a specific HTML grid element ---
    function renderMovies(moviesToRender, targetGridId) {
        const targetGrid = document.getElementById(targetGridId);
        if (!targetGrid) {
            console.error(`Error: Target grid with ID '${targetGridId}' not found on this page.`);
            return;
        }

        targetGrid.innerHTML = ''; // Clear any existing content in the grid

        if (moviesToRender.length === 0) {
            targetGrid.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <p class="text-gray-700 text-xl">No movies found matching your current filters.</p>
                    <p class="text-gray-500 mt-2">Try adjusting your search or genre filter.</p>
                </div>
            `;
            return;
        }

        moviesToRender.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add(
                'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden',
                'transform', 'hover:scale-105', 'transition', 'duration-300', 'ease-in-out'
            );

            let posterHtml = '';
            if (movie.posterUrl) {
                // Corrected: Removed invalid span tags from here
                posterHtml = `<img src="${window.eleventyPathPrefix + movie.posterUrl}" alt="${movie.title} Poster" class="w-full h-72 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/300x450/cccccc/333333?text=Image+Missing';">`;
            } else {
                posterHtml = `<img src="https://placehold.co/300x450/cccccc/333333?text=Image+Missing" alt="Image Missing" class="w-full h-72 object-cover">`;
            }

            const genresHtml = (movie.genres || []).map(genre => `<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${genre}</span>`).join('');

            movieCard.innerHTML = `
                ${posterHtml}
                <div class="p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${movie.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${movie.description.substring(0, 100)}...</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${genresHtml}
                    </div>
                    <a href="${window.eleventyPathPrefix}movie-detail.html?id=${movie.id}" class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">View Details</a>
                </div>
            `;
            targetGrid.appendChild(movieCard);
        });
    }

    // --- Function to render pagination buttons at the bottom of the movie list ---
    function renderPagination(totalMovies) {
        if (!paginationContainer) {
            console.warn("Pagination container not found. Skipping pagination render.");
            return;
        }

        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalMovies / moviesPerPage);

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add(
                'px-4', 'py-2', 'rounded-md', 'font-semibold',
                'transition', 'duration-200', 'ease-in-out',
                ...(currentPageNumber === i ? ['bg-blue-600', 'text-white', 'shadow-lg'] : ['bg-gray-200', 'text-gray-800', 'hover:bg-blue-200'])
            );
            button.addEventListener('click', () => {
                currentPageNumber = i;
                filterAndRenderMovies();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(button);
        }
    }

    // --- Main filtering and rendering logic for movies ---
    function filterAndRenderMovies() {
        console.log('--- filterAndRenderMovies START ---');
        if (typeof allMovies !== 'undefined') {
            console.log('allMovies array loaded. Total movies:', allMovies.length);
        } else {
            console.error('ERROR: allMovies array is UNDEFINED. Check movies.js loading order and syntax.');
            return;
        }

        let processedMovies = allMovies;

        if (currentGenreFilter !== 'All') {
            processedMovies = processedMovies.filter(movie => movie.genres && movie.genres.includes(currentGenreFilter));
            console.log('After genre filter:', processedMovies.length, 'movies.');
        }

        if (currentSearchTerm) {
            console.log('Applying search filter with term:', currentSearchTerm); // Added for debugging
            const lowerCaseSearchTerm = currentSearchTerm.toLowerCase();
            processedMovies = processedMovies.filter(movie =>
                (movie.title && movie.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (movie.description && movie.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (movie.genres && movie.genres.some(genre => genre.toLowerCase().includes(lowerCaseSearchTerm)))
            );
            console.log('After search filter:', processedMovies.length, 'movies.');
        } else {
            console.log('No search term applied.');
        }

        processedMovies.sort((a, b) => (b.year || 0) - (a.year || 0));
        console.log('After sorting, processedMovies length:', processedMovies.length);

        displayedMovies = processedMovies;
        console.log('displayedMovies length (before pagination slice):', displayedMovies.length);


        if (searchResultsInfo) {
            if (currentSearchTerm || currentGenreFilter !== 'All') {
                searchResultsInfo.textContent = `Displaying ${displayedMovies.length} results.`;
            } else {
                searchResultsInfo.textContent = '';
            }
        }

        if (currentPage === 'movies.html') {
            const startIndex = (currentPageNumber - 1) * moviesPerPage;
            const endIndex = startIndex + moviesPerPage;
            const paginatedMovies = displayedMovies.slice(startIndex, endIndex);

            console.log('movies.html: startIndex:', startIndex, 'endIndex:', endIndex, 'paginatedMovies length:', paginatedMovies.length);

            renderMovies(paginatedMovies, 'movie-grid');
            renderPagination(displayedMovies.length);
        } else if (currentPage === 'index.html') {
            const latestMoviesGrid = document.getElementById('latest-movie-grid');
            if (latestMoviesGrid) {
                const moviesToShow = displayedMovies.slice(0, 5);
                console.log('index.html: Showing first 5 latest movies. Actual count:', moviesToShow.length);
                renderMovies(moviesToShow, 'latest-movie-grid');
            }
        }
        console.log('--- filterAndRenderMovies END ---');
    }

    // --- Event Listeners for User Interactions ---

    // Event listener for search input (fires on every input change, more robust)
    if (searchInput) {
        console.log("searchInput element found. Attaching input listener.");
        searchInput.addEventListener('input', (e) => {
            console.log("Input event on searchInput. Value:", e.target.value);
            currentSearchTerm = searchInput.value.trim();
            console.log("currentSearchTerm (from input event):", currentSearchTerm);
            currentPageNumber = 1;
            filterAndRenderMovies();
        });
    } else {
        console.warn("searchInput element (ID: 'searchInput') NOT found.");
    }

    // Event listener for the explicit Search button click (KEPT AS IS)
    if (searchButton) {
        console.log("searchButton element found. Attaching click listener.");
        searchButton.addEventListener('click', () => {
            console.log("Search button clicked. searchInput value:", searchInput ? searchInput.value : 'searchInput is null');
            currentSearchTerm = searchInput.value.trim();
            console.log("currentSearchTerm (from button click):", currentSearchTerm);
            currentPageNumber = 1;
            filterAndRenderMovies();
        });
    } else {
        console.warn("searchButton element (ID: 'searchButton') NOT found.");
    }

    // Event listener for the Clear Search button
    if (clearSearchButton) {
        console.log("clearSearchButton element found. Attaching click listener.");
        clearSearchButton.addEventListener('click', () => {
            console.log("Clear search button clicked.");
            if (searchInput) searchInput.value = '';
            currentSearchTerm = '';
            currentPageNumber = 1;
            filterAndRenderMovies();
        });
    } else {
        // console.warn("clearSearchButton element (ID: 'clear-search-button') NOT found. (Expected if not in HTML)");
    }

    // Event listener for genre filter buttons (delegated to the container)
    if (genreFiltersContainer) {
        console.log("genreFiltersContainer element found. Attaching click listener.");
        genreFiltersContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('genre-button')) {
                console.log("Genre button clicked:", e.target.dataset.genre);
                document.querySelectorAll('.genre-button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                currentGenreFilter = e.target.dataset.genre;
                currentPageNumber = 1;
                filterAndRenderMovies();
            }
        });
    } else {
        console.warn("genreFiltersContainer element (ID: 'genre-filters') NOT found.");
    }

   // --- Initial Render ---
   // Only run filterAndRenderMovies if allMovies is defined, otherwise wait.
   // This handles cases where movies.js might load slightly after script.js DOMContentLoaded.
   if (typeof allMovies !== 'undefined') {
        if (currentPage === 'index.html') {
            setTimeout(() => {
                filterAndRenderMovies();
            }, 100); // Small delay for index page to ensure allMovies is fully parsed
        } else {
            filterAndRenderMovies();
        }
   } else {
        console.warn("allMovies not defined at DOMContentLoaded. Waiting for it to load.");
        // You might need a more robust way to wait for allMovies if it's loaded asynchronously
        // For now, assuming movies.js loads synchronously before script.js
   }
});