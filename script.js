
    

// script.js

// Assume 'movies' array is available globally from movies.js
// Assume 'upcomingTrailers' array is available globally from upcomingTrailers.js (from its own file)

// script.js

// Assume 'movies' array is available globally from movies.js
// Assume 'upcomingTrailers' array is available globally from upcomingTrailers.js (from its own file)

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
const upcomingTrailersGrid = document.getElementById('upcoming-trailers-grid'); // Get the element for upcoming trailers


// Helper function to sanitize titles for URL hashes
function sanitizeTitleForUrl(title) {
    return title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

// Helper function to create a single movie card HTML element
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card', 'bg-white', 'rounded-lg', 'shadow-md', 'p-6', 'flex', 'flex-col', 'items-center', 'text-center');

    movieCard.addEventListener('click', () => {
        window.location.hash = sanitizeTitleForUrl(movie.title);
    });

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
            // Standard YouTube embed URL format
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

    if (isSingleMovie) {
        pagination.style.display = 'none';
        searchResultsInfo.style.display = 'none';
        if (genreFiltersDiv) {
            genreFiltersDiv.parentElement.style.display = 'none';
        }
        // Hide upcoming trailers section when viewing a single movie
        const upcomingTrailersSection = document.getElementById('upcoming-trailers-section');
        if (upcomingTrailersSection) {
            upcomingTrailersSection.style.display = 'none';
        }

        const backButton = document.createElement('button');
        backButton.textContent = 'Back to All Movies';
        backButton.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'mb-4');
        backButton.addEventListener('click', () => {
            window.location.hash = '';
        });
        movieGrid.appendChild(backButton);

        movieGrid.appendChild(createMovieCard(data));

    } else {
        pagination.style.display = 'flex';
        searchResultsInfo.style.display = 'block';
        if (genreFiltersDiv) {
            genreFiltersDiv.parentElement.style.display = 'block';
        }
        // Show upcoming trailers section when viewing the main list
        const upcomingTrailersSection = document.getElementById('upcoming-trailers-section');
        if (upcomingTrailersSection) {
            upcomingTrailersSection.style.display = 'block';
        }

        if (data.length === 0) {
            searchResultsInfo.textContent = 'No movies found matching your criteria.';
            movieGrid.innerHTML = '<p class="text-center text-gray-600 text-xl col-span-full">No movies found matching your criteria.</p>';
        } else {
            searchResultsInfo.textContent = `Showing ${data.length} movie(s).`;
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
    let tempMovies = [...movies];

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
    currentPage = 1;

    displayContent(filteredAndSearchedMovies, false);
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
            'movie-card',
            'bg-white',
            'rounded-lg',
            'shadow-md',
            'p-6',
            'flex',
            'flex-col',
            'items-center',
            'text-center'
        );

        // Corrected YouTube embed URL (changed '0' to 'embed')
        const videoSrc = trailer.source === 'youtube'
            ? `https://www.youtube.com/embed/${trailer.embedId}`
            : `https://ok.ru/videoembed/${trailer.embedId}`;

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
    window.location.hash = '';

    currentSearchTerm = searchTerm;
    currentFilter = 'All';
    document.querySelectorAll('.genre-button').forEach(button => {
        button.classList.remove('active');
        if (button.dataset.genre === 'All') {
            button.classList.add('active');
        }
    });

    applyFiltersAndDisplay();
}

// Hash Change Handler
function handleHashChange() {
    const hash = window.location.hash.substring(1);

    if (hash) {
        const foundMovie = movies.find(movie => sanitizeTitleForUrl(movie.title) === hash);
        if (foundMovie) {
            displayContent(foundMovie, true);
        } else {
            window.location.hash = '';
            applyFiltersAndDisplay();
        }
    } else {
        applyFiltersAndDisplay();
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
        currentFilter = 'All';
        document.querySelectorAll('.genre-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.genre === 'All') {
                button.classList.add('active');
            }
        });
        applyFiltersAndDisplay();
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
            currentSearchTerm = '';
            searchInput.value = '';

            window.location.hash = '';
            applyFiltersAndDisplay();
        }
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    handleHashChange();
    displayUpcomingTrailers(upcomingTrailers); // Call for trailers
});