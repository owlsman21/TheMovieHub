const { DateTime } = require("luxon"); // Add this line at the very top

module.exports = function(eleventyConfig) {
    // Passthrough copies (ensure these match any other static assets you have)
    // .eleventy.js
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // Passthrough copies (ensure these match any other static assets you have)
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("movies.js");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    // ADD THIS LINE:
    eleventyConfig.addPassthroughCopy("movie-detail.html"); // <--- ADD THIS LINE!

    // ... (rest of your config) ...
};

    // Custom date filter for Nunjucks using Luxon
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        // Example format: 01 Jan 2025
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
    });

    // Custom filter for HTML datetime attribute (e.g., <time datetime="2025-01-01">)
    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
    });

    // This is crucial for your URLs on GitHub Pages or if you're serving from a subfolder
    // It prepends '/TheMovieHub/' to all generated URLs.
    eleventyConfig.addGlobalData("pathPrefix", "/TheMovieHub/");

    return {
        dir: {
            input: ".", // Your main project root
            includes: "_includes",
            data: "_data",
            output: "_site" // <<-- Make sure this is exactly "_site"
        },
        // This also explicitly sets the path prefix for Eleventy's internal URL generation
        pathPrefix: "/TheMovieHub/"
    };
};