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
    
    // IMPORTANT: If 'movie-detail.njk' is meant to be processed by Eleventy
    // to generate 'movie-detail.html' (which is typical for a .njk file),
    // then you should NOT passthrough copy 'movie-detail.html'.
    // Eleventy will generate it automatically.
    // Uncomment the line below ONLY if 'movie-detail.html' is a static file
    // that Eleventy does not process (e.g., plain HTML that doesn't use Nunjucks syntax).
    // eleventyConfig.addPassthroughCopy("movie-detail.html"); 

    // Custom date filter for Nunjucks using Luxon
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        // Example format: 01 Jan 2025
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLLyyyy");
    });

    // Custom filter for HTML datetime attribute (e.g., <time datetime="2025-01-01">)
    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
    });

    return {
        dir: {
            input: ".", // Your main project root
            includes: "_includes",
            data: "_data",
            output: "_site" // Make sure this is exactly "_site"
        },
        pathPrefix: "/TheMovieHub/", // <--- THIS IS THE CRUCIAL ADDITION
    };
};