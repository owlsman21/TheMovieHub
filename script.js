// script.js

// Assume 'movies' array is available globally from movies.js
// Assume 'upcomingTrailers' array is available globally from upcomingTrailers.js (from its own file)

const moviesPerPage = 20;
let currentPage = 1;
let currentFilter = 'All';
let currentSearchTerm = '';
let filteredAndSearchedMovies = [];

// DOM Elements
const movieGrid = document.getElementById('movie-grid');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const clearSearchButton = document.getElementById('clear-search-button');
const searchResultsInfo = document.getElementById('search-results-info');
const genreFiltersDiv = document.getElementById('genre-filters');
const upcomingTrailersGrid = document.getElementById('upcoming-trailers-grid'); // This is the grid *inside* the section

// --- NEW/CORRECTED REFERENCES ---
const upcomingTrailersSection = document.getElementById('upcoming-trailers-section'); // Get the actual section
const exploreAllMoviesButton = document.getElementById('explore-all-movies-button'); // Get the Explore button
// --- END NEW/CORRECTED REFERENCES ---


// Helper function to sanitize titles for URL hashes
function sanitizeTitleForUrl(title) {
    return title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

// Helper function to create a single movie card HTML element
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    // Ensure movieCard has an ID for direct linking/scrolling
    movieCard.id = sanitizeTitleForUrl(movie.title);
    movieCard.classList.add('movie-card', 'bg-white', 'rounded-lg', 'shadow-md', 'p-6', 'flex', 'flex-col', 'items-center', 'text-center');

    // Remove click event for now, as direct linking is handled by URL hash
    // movieCard.addEventListener('click', () => {
    //     window.location.hash = sanitizeTitleForUrl(movie.title);
    // });

    const movieTitleH3 = document.createElement('h3');
    movieTitleH3.classList.add('movie-title', 'text-xl', 'font-semibold', 'text-blue-700', 'mb-2');
    movieTitleH3.textContent = movie.title;
    movieCard.appendChild(movieTitleH3);

    if (movie.description) {
        const movieDescriptionP = document.createElement('p');
        movieDescriptionP.classList.add('movie-description', 'text-gray-600', 'mb-4');
        movieDescriptionP.textContent = movie.description;
        movieCard.appendChild(movieDescriptionP);
    }

    if (movie.genres && movie.genres.length > 0) {
        const genresP = document.createElement('p');
        genresP.classList.add('text-sm', 'text-gray-500', 'mb-3');
        const displayGenres = movie.genres.filter(genre => genre.trim() !== '');
        genresP.innerHTML = `<strong>Genres:</strong> ${displayGenres.join(', ')}`;
        movieCard.appendChild(genresP);
    }

    if (movie.embedId) {
        const videoResponsiveDiv = document.createElement('div');
        videoResponsiveDiv.classList.add('video-responsive', 'w-full');

        const iframe = document.createElement('iframe');
        iframe.title = movie.title + " Video";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        let videoSourceUrl = '';
        if (movie.source === 'youtube') {
            // Corrected YouTube embed URL (changed '0' to 'embed')
            videoSourceUrl = `https://www.youtube.com/embed/${movie.embedId}`;
        } else if (movie.source === 'okru') {
            videoSourceUrl = `https://ok.ru/videoembed/${movie.embedId}`;
        } else if (movie.source === 'rumble') {
            videoSourceUrl = `https://rumble.com/embed/${movie.embedId}`;
        }
        iframe.src = videoSourceUrl;

        videoResponsiveDiv.appendChild(iframe);
        movieCard.appendChild(videoResponsiveDiv);
    }

    return movieCard;
}

// Main function to display content (either paginated list or single movie)
function displayContent(data, isSingleMovie = false) {
    if (!movieGrid || !pagination || !searchResultsInfo) {
        console.error("Required DOM elements not found!");
        return;
    }
    movieGrid.innerHTML = ''; // Clear previous movies

    // --- Adjust visibility based on content type ---
    if (isSingleMovie) {
        pagination.style.display = 'none';
        searchResultsInfo.style.display = 'none';
        if (genreFiltersDiv) {
            genreFiltersDiv.parentElement.style.display = 'none'; // Hide genre filter section
        }
        if (upcomingTrailersSection) {
            upcomingTrailersSection.style.display = 'none'; // Hide upcoming trailers section
        }
        if (exploreAllMoviesButton) {
            exploreAllMoviesButton.style.display = 'none'; // Hide explore button
        }

        // Create and append the "Back to All Movies" button outside the grid for better layout
        const backButtonContainer = document.createElement('div');
        backButtonContainer.classList.add('text-center', 'my-4'); // Center the button with some margin
        const backButton = document.createElement('button');
        backButton.textContent = 'Back to All Movies';
        backButton.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-3', 'px-6', 'rounded-full', 'inline-block', 'shadow-lg');
        backButton.addEventListener('click', () => {
            window.location.hash = ''; // Clear the hash, triggering handleHashChange
            // No need to call applyFiltersAndDisplay() directly here, as handleHashChange will do it
        });
        movieGrid.parentElement.insertBefore(backButtonContainer, movieGrid); // Insert before the movie grid

        movieGrid.appendChild(createMovieCard(data)); // Add the single movie card

    } else {
        // When displaying the main list (not a single movie)
        // Ensure main sections are visible if not currently searching
        if (!currentSearchTerm && window.location.hash === '') { // Only show if no search is active AND no hash is present
            if (upcomingTrailersSection) {
                upcomingTrailersSection.style.display = 'block';
            }
            if (exploreAllMoviesButton) {
                exploreAllMoviesButton.style.display = 'block';
            }
        } else { // If there is a search term or a hash is active, hide these
             if (upcomingTrailersSection) {
                upcomingTrailersSection.style.display = 'none';
            }
            if (exploreAllMoviesButton) {
                exploreAllMoviesButton.style.display = 'none';
            }
        }

        // Remove any dynamically added back button from single movie view
        const existingBackButtonContainer = movieGrid.parentElement.querySelector('.text-center.my-4');
        if (existingBackButtonContainer) {
            existingBackButtonContainer.remove();
        }
        
        pagination.style.display = 'flex'; // Pagination is always visible for lists
        searchResultsInfo.style.display = (currentSearchTerm || currentFilter !== 'All') ? 'block' : 'none';
        if (genreFiltersDiv) {
            genreFiltersDiv.parentElement.style.display = 'block'; // Ensure genre filters are visible
        }

        if (data.length === 0) {
            searchResultsInfo.textContent = 'No movies found matching your criteria.';
            movieGrid.innerHTML = '<p class="text-center text-gray-600 text-xl col-span-full">No movies found matching your criteria.</p>';
        } else {
            // Update the search results info text
            let resultText = `Showing ${data.length} movie(s)`;
            if (currentSearchTerm) {
                resultText += ` for "${currentSearchTerm}"`;
            }
            if (currentFilter !== 'All') {
                resultText += ` in genre "${currentFilter}"`;
            }
            resultText += '.';
            searchResultsInfo.textContent = resultText;
        }

        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShowOnPage = data.slice(startIndex, endIndex);

        moviesToShowOnPage.forEach(movie => {
            movieGrid.appendChild(createMovieCard(movie));
        });
        displayPagination(data);
    }
}

// Function to handle all filtering (genre and search) and then display
function applyFiltersAndDisplay() {
    let tempMovies = [...movies]; // Start with all movies

    if (currentFilter !== 'All') {
        tempMovies = tempMovies.filter(movie =>
            movie.genres && movie.genres.includes(currentFilter)
        );
    }

    if (currentSearchTerm) {
        const searchTermLower = currentSearchTerm.toLowerCase();
        tempMovies = tempMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchTermLower) ||
            (movie.description && movie.description.toLowerCase().includes(searchTermLower)) ||
            (movie.genres && movie.genres.some(genre => genre.toLowerCase().includes(searchTermLower)))
        );
    }

    filteredAndSearchedMovies = tempMovies;
    currentPage = 1; // Reset to first page for new filter/search

    displayContent(filteredAndSearchedMovies, false); // Always display as a list, not single movie
}


function displayPagination(moviesToPaginate = filteredAndSearchedMovies) {
    if (!pagination) {
        console.error("Pagination element not found!");
        return;
    }
    pagination.innerHTML = '';

    const totalPages = Math.ceil(moviesToPaginate.length / moviesPerPage);

    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    } else {
        pagination.style.display = 'flex';
    }

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none', 'transition', 'duration-300', 'ease-in-out');
    homeButton.classList.add(currentPage === 1 ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    homeButton.disabled = currentPage === 1;
    homeButton.addEventListener('click', () => {
        currentPage = 1;
        displayContent(moviesToPaginate, false);
        window.scrollTo({ top: movieGrid.offsetTop, behavior: 'smooth' }); // Scroll to movie grid
    });
    pagination.appendChild(homeButton);

    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none', 'transition', 'duration-300', 'ease-in-out', 'ml-2');
    backButton.classList.add(currentPage === 1 ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    backButton.disabled = currentPage === 1;
    backButton.addEventListener('click', () => {
        currentPage--;
        displayContent(moviesToPaginate, false);
        window.scrollTo({ top: movieGrid.offsetTop, behavior: 'smooth' }); // Scroll to movie grid
    });
    pagination.appendChild(backButton);

    const maxPageButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    if (startPage > 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.classList.add('px-2', 'py-2', 'text-gray-400', 'mx-1');
        pagination.appendChild(ellipsis);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none', 'transition', 'duration-300', 'ease-in-out', 'ml-1', 'mr-1');
        pageButton.classList.add(currentPage === i ? 'bg-blue-500' : 'bg-gray-700', 'hover:bg-gray-600');
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayContent(moviesToPaginate, false);
            window.scrollTo({ top: movieGrid.offsetTop, behavior: 'smooth' }); // Scroll to movie grid
        });
        pagination.appendChild(pageButton);
    }

    if (endPage < totalPages) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.classList.add('px-2', 'py-2', 'text-gray-400', 'mx-1');
        pagination.appendChild(ellipsis);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none', 'transition', 'duration-300', 'ease-in-out', 'ml-2');
    nextButton.classList.add(currentPage === totalPages ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        currentPage++;
        displayContent(moviesToPaginate, false);
        window.scrollTo({ top: movieGrid.offsetTop, behavior: 'smooth' }); // Scroll to movie grid
    });
    pagination.appendChild(nextButton);
}

// Function to display upcoming trailers
function displayUpcomingTrailers(trailersToDisplay) {
    if (!upcomingTrailersGrid) return;

    upcomingTrailersGrid.innerHTML = '';

    trailersToDisplay.forEach(trailer => {
        const trailerCard = document.createElement('div');
        trailerCard.classList.add(
            'movie-card', // Re-using movie-card style for trailers
            'bg-white',
            'rounded-lg',
            'shadow-md',
            'p-6',
            'flex',
            'flex-col',
            'items-center',
            'text-center'
        );

        // Corrected YouTube embed URL
        const videoSrc = trailer.source === 'youtube'
            ? `https://www.youtube.com/embed/${trailer.embedId}`
            : `https://ok.ru/videoembed/${trailer.embedId}`; // Assuming okru for non-youtube

        trailerCard.innerHTML = `
            <h3 class="text-xl font-semibold text-blue-700 mb-2">${trailer.title}</h3>
            <p class="text-gray-600 mb-3">${trailer.description}</p>
            ${trailer.releaseDate ? `<p class="text-sm text-gray-500 mb-3">Expected: ${trailer.releaseDate}</p>` : ''}
            <div class="video-responsive w-full">
                <iframe
                    src="${videoSrc}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        `;
        upcomingTrailersGrid.appendChild(trailerCard);
    });
}

// Search Functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    window.location.hash = ''; // Clear hash when performing a search

    currentSearchTerm = searchTerm;
    currentFilter = 'All'; // Reset genre filter
    document.querySelectorAll('.genre-button').forEach(button => {
        button.classList.remove('active');
        if (button.dataset.genre === 'All') {
            button.classList.add('active');
        }
    });

    // --- LOGIC FOR HIDING/SHOWING SECTIONS ON SEARCH ---
    if (upcomingTrailersSection) {
        upcomingTrailersSection.style.display = 'none'; // Always hide trailers on search
    }
    if (exploreAllMoviesButton) {
        exploreAllMoviesButton.style.display = 'none'; // Always hide explore button on search
    }
    if (searchResultsInfo) {
        searchResultsInfo.style.display = searchTerm !== '' ? 'block' : 'none'; // Only show info if search term is active
    }
    if (searchTerm === '') {
        searchResultsInfo.textContent = ''; // Clear info text if search is empty
    }
    // --- END LOGIC ---

    applyFiltersAndDisplay();
    window.scrollTo({ top: movieGrid.offsetTop, behavior: 'smooth' }); // Scroll to movie grid after search
}

// Hash Change Handler
function handleHashChange() {
    const hash = window.location.hash.substring(1);

    if (hash) {
        const foundMovie = movies.find(movie => sanitizeTitleForUrl(movie.title) === hash);
        if (foundMovie) {
            displayContent(foundMovie, true); // Display single movie
            // Scroll to the movie card after it's rendered
            setTimeout(() => { // Use a small delay to ensure rendering
                const movieCardElement = document.getElementById(hash);
                if (movieCardElement) {
                    movieCardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            
        } else {
            // If hash not found, default to showing all movies
            window.location.hash = ''; // Clear invalid hash
            applyFiltersAndDisplay();
            // Ensure main sections are visible when falling back to all movies
            // This case should not be triggered directly if handleInitialLoad is correct
            // But good to have as a fallback in applyFiltersAndDisplay
        }
    } else {
        // No hash, display default all movies view (handled by applyFiltersAndDisplay)
        applyFiltersAndDisplay();
        // Ensure main sections are visible when no hash is present AND no search term
        if (!currentSearchTerm) {
            if (upcomingTrailersSection) {
                upcomingTrailersSection.style.display = 'block';
            }
            if (exploreAllMoviesButton) {
                exploreAllMoviesButton.style.display = 'block';
            }
        }
    }
}


// Event Listeners
if (searchInput) {
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
}
if (searchButton) {
    searchButton.addEventListener('click', performSearch);
}
if (clearSearchButton) {
    clearSearchButton.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        currentFilter = 'All'; // Reset genre filter on clear
        document.querySelectorAll('.genre-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.genre === 'All') {
                button.classList.add('active');
            }
        });

        // Ensure all sections are visible when clearing everything
        if (upcomingTrailersSection) {
            upcomingTrailersSection.style.display = 'block';
        }
        if (exploreAllMoviesButton) {
            exploreAllMoviesButton.style.display = 'block';
        }
        if (searchResultsInfo) {
            searchResultsInfo.style.display = 'none'; // Hide search info on clear
            searchResultsInfo.textContent = ''; // Clear search results info text
        }
        window.location.hash = ''; // Clear hash on clear
        applyFiltersAndDisplay(); // Re-display all movies
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of page
    });
}

if (genreFiltersDiv) {
    genreFiltersDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('genre-button')) {
            document.querySelectorAll('.genre-button').forEach(button => {
                button.classList.remove('active');
            });
            event.target.classList.add('active');

            currentFilter = event.target.dataset.genre;
            currentSearchTerm = ''; // Clear search term when filtering by genre
            searchInput.value = ''; // Clear search input field

            // Ensure all sections are visible for genre filters (unless it's 'All' after a search, but this handles simple genre clicks)
            if (upcomingTrailersSection) {
                upcomingTrailersSection.style.display = 'block';
            }
            if (exploreAllMoviesButton) {
                exploreAllMoviesButton.style.display = 'block';
            }
            if (searchResultsInfo) {
                searchResultsInfo.style.display = 'none'; // Hide search info when filtering
            }
            searchResultsInfo.textContent = ''; // Clear search results info text

            window.location.hash = ''; // Clear hash on genre filter
            applyFiltersAndDisplay(); // Apply filter and display movies
            window.scrollTo({ top: movieGrid.offsetTop, behavior: 'smooth' }); // Scroll to movie grid
        }
    });
}

// --- NEW Event Listener for EXPLORE ALL MOVIES button ---
if (exploreAllMoviesButton) {
    exploreAllMoviesButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default hash scroll behavior
        
        // Reset state
        searchInput.value = '';
        currentSearchTerm = '';
        currentFilter = 'All';
        document.querySelectorAll('.genre-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.genre === 'All') {
                button.classList.add('active');
            }
        });

        // Hide trailers, hide explore button
        if (upcomingTrailersSection) {
            upcomingTrailersSection.style.display = 'none'; // Hide trailers
        }
        if (exploreAllMoviesButton) {
            exploreAllMoviesButton.style.display = 'none'; // Hide itself
        }
        if (searchResultsInfo) {
            searchResultsInfo.style.display = 'block'; // Show result count for all movies
        }
        if (genreFiltersDiv) {
            genreFiltersDiv.parentElement.style.display = 'block'; // Ensure genre filters are visible
        }

        window.location.hash = ''; // Clear hash
        applyFiltersAndDisplay(); // Display all movies
        window.scrollTo({ top: movieGrid.offsetTop, behavior: 'smooth' }); // Scroll to movie grid
    });
}


// --- Initial Load Handler ---
function handleInitialLoad() {
    const hash = window.location.hash.substring(1);

    if (hash) {
        // If there's a hash, bypass initial trailer display and go directly to single movie
        handleHashChange(); // This will display single movie and hide other sections
    } else {
        // No hash, display default view: trailers first, then all movies below after user clicks "Explore"
        displayUpcomingTrailers(upcomingTrailers); // Display trailers initially
        
        // Ensure the sections are visible for the initial load
        if (upcomingTrailersSection) {
            upcomingTrailersSection.style.display = 'block';
        }
        if (exploreAllMoviesButton) {
            exploreAllMoviesButton.style.display = 'block';
        }
        
        // Initially hide movie grid, pagination, genre filters, and search info until "Explore All Movies" is clicked
        if (movieGrid) movieGrid.innerHTML = ''; // Clear grid
        if (pagination) pagination.style.display = 'none';
        if (searchResultsInfo) searchResultsInfo.style.display = 'none';
        if (genreFiltersDiv) genreFiltersDiv.parentElement.style.display = 'none';

        // Set initial filteredAndSearchedMovies to all movies in case explore button is clicked later
        filteredAndSearchedMovies = [...movies];
    }
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', handleInitialLoad);

// Listen for hash changes after initial load (e.g., when Back button is clicked, or user manually changes hash)
window.addEventListener('hashchange', handleHashChange);