const fs = require('fs');
const path = require('path');

// --- IMPORTANT: Load your movies.js data ---
// You'll need to adapt this part based on how your allMovies array is exported.
// Assuming movies.js looks something like: `const allMovies = [...]`
// We need to execute it in a way that gives us the allMovies array.
// The simplest way if it's just a global `const allMovies = [...]` is to load it.

// Method 1: If allMovies is truly global and accessible (less robust for Node.js)
// Try this first, if it fails, use Method 2.
let allMovies = [];
try {
    const moviesJsContent = fs.readFileSync(path.join(__dirname, 'movies.js'), 'utf8');
    // Use a trick to get the allMovies array: create a temporary context.
    const tempFn = new Function('exports', 'module', 'require', '__dirname', '__filename', moviesJsContent + '; return allMovies;');
    allMovies = tempFn({}, {}, require, __dirname, __filename);
    console.log(`Loaded ${allMovies.length} movies from movies.js (Method 1).`);
} catch (error) {
    console.warn("Method 1 failed, trying Method 2 for movies.js:", error.message);
    // Method 2: If movies.js exports allMovies (e.g., `module.exports = allMovies;`)
    // You might need to temporarily modify movies.js to export allMovies if it's not already.
    // For a simple `const allMovies = [...]`, wrap it in `module.exports = allMovies;`
    // OR just copy the content of `allMovies = [...]` directly into this script if it's small enough.
    try {
        // If movies.js contains `module.exports = allMovies;`
        // const { allMovies } = require('./movies.js'); // Assuming it exports an object with allMovies
        // Or if it just exports the array directly:
        allMovies = require('./movies.js'); // Assuming `module.exports = [...]`
        console.log(`Loaded ${allMovies.length} movies from movies.js (Method 2).`);
    } catch (e) {
        console.error("\nERROR: Could not load movies.js. Please check its content and how 'allMovies' is defined/exported.");
        console.error("Make sure 'allMovies' is a globally accessible variable or module export in movies.js.");
        console.error("If 'allMovies' is just `const allMovies = [...]`, you might need to manually copy its array content into this script.");
        process.exit(1); // Exit if movies can't be loaded
    }
}


const BASE_URL = "https://owlsman21.github.io/TheMovieHub/";
const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml'); // Output sitemap to the root directory

const staticPages = [
    { loc: BASE_URL, lastmod: '2025-06-17', changefreq: 'daily', priority: '1.0' },
    { loc: BASE_URL + 'index.html', lastmod: '2025-06-17', changefreq: 'daily', priority: '0.9' },
    { loc: BASE_URL + 'about.html', lastmod: '2025-06-17', changefreq: 'monthly', priority: '0.7' },
    { loc: BASE_URL + 'contact.html', lastmod: '2025-06-17', changefreq: 'monthly', priority: '0.7' },
    { loc: BASE_URL + 'movies.html', lastmod: '2025-06-17', changefreq: 'weekly', priority: '0.8' },
];

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
staticPages.forEach(page => {
    sitemapContent += `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
});

// Add dynamic movie detail pages
if (allMovies && allMovies.length > 0) {
    allMovies.forEach(movie => {
        if (movie.id) { // Ensure movie has an ID
            const movieUrl = `${BASE_URL}movie-detail.html?id=${movie.id}`;
            // You can try to get a more accurate lastmod from your movie data if available
            // Otherwise, use a recent date or the current date.
            const movieLastMod = '2025-06-17'; // Replace with movie.lastUpdatedDate if available
            sitemapContent += `
  <url>
    <loc>${movieUrl}</loc>
    <lastmod>${movieLastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
        }
    });
} else {
    console.warn("No movies found in allMovies array. Movie detail URLs will not be generated.");
}

sitemapContent += `
</urlset>`;

fs.writeFileSync(SITEMAP_PATH, sitemapContent.trim(), 'utf8');

console.log(`sitemap.xml generated successfully at ${SITEMAP_PATH}`);
console.log(`Total URLs in sitemap: ${staticPages.length + (allMovies ? allMovies.length : 0)}`);