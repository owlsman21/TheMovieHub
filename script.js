// Get the Eleventy path prefix from the global variable defined in Nunjucks
const eleventyPathPrefix = window.eleventyPathPrefix || "/";

document.addEventListener('DOMContentLoaded', () => {
    // Check if on the homepage (index.html)
    if (document.getElementById('latest-movie-grid')) {
        console.log("Current Page (determined): index.html"); // Debug message

        // Function to fetch and display latest movies on the homepage
        fetchLatestMovies();
    }

    // Check if on the movies page (movies.html)
    if (document.getElementById('movie-grid')) {
        console.log("Current Page (determined): movies.html"); // Debug message

        // Add event listeners and fetch all movies for the movies page
        setupMoviesPage();
    }

    // Initialize search and filter elements if they exist (they usually exist on movies.html)
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const genreFiltersContainer = document.getElementById('genre-filters');

    if (searchInput) {
        console.debug("DEBUG: SearchInput element found."); // Debug message
    } else {
        console.debug("DEBUG: SearchInput element (ID: 'searchInput') NOT found."); // Debug message
    }
    if (searchButton) {
        console.debug("DEBUG: searchButton element found."); // Debug message
    } else {
        console.debug("DEBUG: searchButton element (ID: 'searchButton') NOT found."); // Debug message
    }
    if (genreFiltersContainer) {
        console.debug("DEBUG: genreFiltersContainer element found."); // Debug message
    } else {
        console.debug("DEBUG: genreFiltersContainer element (ID: 'genre-filters') NOT found."); // Debug message
    }

    console.log("DOMContentLoaded fired. Script execution started.");
});


// --- Homepage (index.html) Logic ---
async function fetchLatestMovies() {
    console.log("fetchLatestMovies START"); // Debug message
    const latestMovieGrid = document.getElementById('latest-movie-grid');
    if (!latestMovieGrid) {
        console.error("Error: #latest-movie-grid not found on the page.");
        return;
    }

    latestMovieGrid.innerHTML = '<p class="col-span-full text-center">Loading latest movies...</p>'; // Show loading

    try {
        const moviesResponse = await fetch(`${eleventyPathPrefix}movies.json`);
        if (!moviesResponse.ok) {
            throw new Error(`HTTP error! status: ${moviesResponse.status}`);
        }
        const allMovies = await moviesResponse.json();
        console.log("allMovies array loaded. Total movies:", allMovies.length); // Debug message

        // Sort movies by release date in descending order to get the latest
        const sortedMovies = allMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

        // Get the first 5 latest movies
        const latest5Movies = sortedMovies.slice(0, 5);
        console.log("Showing first 5 latest movies. Actual count:", latest5Movies.length); // Debug message

        if (latest5Movies.length > 0) {
            latestMovieGrid.innerHTML = ''; // Clear loading text
            latest5Movies.forEach(movie => {
                const movieCardHtml = createMovieCard(movie);
                latestMovieGrid.innerHTML += movieCardHtml; // Append each movie card
            });
        } else {
            latestMovieGrid.innerHTML = '<p class="col-span-full text-center">No latest movies found.</p>';
        }

    } catch (error) {
        console.error('Error fetching or displaying latest movies:', error);
        latestMovieGrid.innerHTML = '<p class="col-span-full text-center text-red-500">Failed to load movies. Please try again later.</p>';
    }
    console.log("fetchLatestMovies END"); // Debug message
}


// --- Movies Page (movies.html) Logic ---
let allMovies = []; // Stores all movies
let filteredMovies = []; // Stores movies after search/filter
let currentPage = 1;
const moviesPerPage = 10; // Adjust as needed

async function setupMoviesPage() {
    console.log("setupMoviesPage START"); // Debug message
    const movieGrid = document.getElementById('movie-grid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const genreFiltersContainer = document.getElementById('genre-filters');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const paginationContainer = document.getElementById('pagination');

    if (!movieGrid) {
        console.error("Error: #movie-grid not found on the movies page.");
        return;
    }

    try {
        const moviesResponse = await fetch(`${eleventyPathPrefix}movies.json`);
        if (!moviesResponse.ok) {
            throw new Error(`HTTP error! status: ${moviesResponse.status}`);
        }
        allMovies = await moviesResponse.json();
        filteredMovies = [...allMovies]; // Initialize filteredMovies with all movies
        console.log("allMovies array loaded. Total movies:", allMovies.length);

        // Populate genre filters
        populateGenreFilters(genreFiltersContainer);

        // Event listeners for search and filter
        if (searchButton) searchButton.addEventListener('click', applyFilters);
        if (searchInput) searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') applyFilters();
        });
        if (genreFiltersContainer) {
            genreFiltersContainer.addEventListener('click', (event) => {
                if (event.target.tagName === 'BUTTON' && event.target.dataset.genre) {
                    toggleGenreFilter(event.target);
                }
            });
        }

        // Pagination event listeners
        if (prevPageButton) prevPageButton.addEventListener('click', () => changePage(-1));
        if (nextPageButton) nextPageButton.addEventListener('click', () => changePage(1));

        // Initial display
        displayMovies();
        console.log("setupMoviesPage END"); // Debug message

    } catch (error) {
        console.error('Error setting up movies page:', error);
        movieGrid.innerHTML = '<p class="col-span-full text-center text-red-500">Failed to load movies. Please try again later.</p>';
    }
}

function displayMovies() {
    console.log("displayMovies START"); // Debug message
    const movieGrid = document.getElementById('movie-grid');
    const paginationContainer = document.getElementById('pagination');
    if (!movieGrid) return; // Exit if movieGrid doesn't exist

    movieGrid.innerHTML = ''; // Clear previous movies

    const start = (currentPage - 1) * moviesPerPage;
    const end = start + moviesPerPage;
    const moviesToDisplay = filteredMovies.slice(start, end);

    console.log("displayedMovies length (before pagination slice)", filteredMovies.length); // Debug message
    console.log(`Displaying movies from index ${start} to ${end}. Actual count: ${moviesToDisplay.length}`); // Debug message

    if (moviesToDisplay.length === 0) {
        movieGrid.innerHTML = '<p class="col-span-full text-center">No movies found matching your criteria.</p>';
        if (paginationContainer) paginationContainer.style.display = 'none'; // Hide pagination if no movies
    } else {
        moviesToDisplay.forEach(movie => {
            const movieCardHtml = createMovieCard(movie);
            movieGrid.innerHTML += movieCardHtml;
        });
        if (paginationContainer) paginationContainer.style.display = 'flex'; // Show pagination
        updatePaginationButtons();
    }
    console.log("displayMovies END"); // Debug message
}

function createMovieCard(movie) {
    const posterPath = movie.poster_path ? `${eleventyPathPrefix}images/posters/${movie.poster_path}` : `${eleventyPathPrefix}images/placeholder.jpg`;
    // Use the | url filter implicitly for the movie-detail page path
    const detailUrl = `${eleventyPathPrefix}movie-detail.html?id=${movie.id}`;
    return `
        <div class="movie-card">
            <a href="${detailUrl}">
                <img src="${posterPath}" alt="${movie.title} Poster">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p class="release-date">Release Date: ${movie.release_date}</p>
                </div>
            </a>
        </div>
    `;
}


function populateGenreFilters(container) {
    if (!container) {
        console.warn("Genre filters container not found. Skipping genre filter population.");
        return;
    }
    const genres = [...new Set(allMovies.flatMap(movie => movie.genres || []))];
    container.innerHTML = `<button data-genre="all" class="active">All Genres</button>`;
    genres.sort().forEach(genre => {
        container.innerHTML += `<button data-genre="${genre}">${genre}</button>`;
    });
}

function applyFilters() {
    console.log("applyFilters START"); // Debug message
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeGenreButton = document.querySelector('.genre-filters button.active');
    const selectedGenre = activeGenreButton ? activeGenreButton.dataset.genre : 'all';

    filteredMovies = allMovies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm) ||
                              movie.overview.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'all' || (movie.genres && movie.genres.includes(selectedGenre));
        return matchesSearch && matchesGenre;
    });

    currentPage = 1; // Reset to first page after applying filters
    displayMovies();
    console.log("applyFilters END. Filtered movies count:", filteredMovies.length); // Debug message
}

function toggleGenreFilter(clickedButton) {
    const genreButtons = document.querySelectorAll('.genre-filters button');
    genreButtons.forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
    applyFilters();
}

function updatePaginationButtons() {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

    if (prevPageButton) prevPageButton.disabled = currentPage === 1;
    if (nextPageButton) nextPageButton.disabled = currentPage === totalPages || totalPages === 0;

    // Optional: display current page number
    const pageInfo = document.getElementById('pageInfo');
    if (pageInfo) pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

function changePage(delta) {
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    currentPage += delta;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    displayMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
}

// --- Movie Detail Page Logic ---
// This part would typically be in movie-detail.js if you had one,
// but it's included here if you're keeping all JS in script.js for simplicity.
// For now, it assumes movie-detail.html also uses script.js
async function fetchMovieDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    const movieDetailContainer = document.getElementById('movie-detail-container');

    if (!movieId || !movieDetailContainer) {
        console.error("Movie ID not found in URL or movie detail container not present.");
        return;
    }

    try {
        const moviesResponse = await fetch(`${eleventyPathPrefix}movies.json`);
        if (!moviesResponse.ok) {
            throw new Error(`HTTP error! status: ${moviesResponse.status}`);
        }
        const allMovies = await moviesResponse.json();
        const movie = allMovies.find(m => m.id.toString() === movieId);

        if (movie) {
            movieDetailContainer.innerHTML = `
                <div class="movie-detail-header">
                    <h1>${movie.title}</h1>
                </div>
                <div class="movie-detail-grid">
                    <div class="movie-detail-poster">
                        <img src="${eleventyPathPrefix}images/posters/${movie.poster_path}" alt="${movie.title} Poster">
                    </div>
                    <div class="movie-detail-info">
                        <h2>Overview</h2>
                        <p>${movie.overview}</p>
                        <p class="release-date"><strong>Release Date:</strong> ${movie.release_date}</p>
                        <p class="rating"><strong>Rating:</strong> ${movie.vote_average.toFixed(1)} / 10 (${movie.vote_count} votes)</p>
                        <div class="genres">
                            <strong>Genres:</strong>
                            ${movie.genres.map(genre => `<span>${genre}</span>`).join('')}
                        </div>
                        <a href="${eleventyPathPrefix}movies.html" class="back-button">Back to Movies</a>
                    </div>
                </div>
            `;
        } else {
            movieDetailContainer.innerHTML = '<p class="text-center text-red-500">Movie not found.</p>';
        }
    } catch (error) {
        console.error('Error fetching movie details:', error);
        movieDetailContainer.innerHTML = '<p class="text-center text-red-500">Failed to load movie details.</p>';
    }
}

// Call fetchMovieDetail if on movie-detail.html (assuming it uses this script)
if (document.getElementById('movie-detail-container')) {
    console.log("Current Page (determined): movie-detail.html"); // Debug message
    fetchMovieDetail();
}