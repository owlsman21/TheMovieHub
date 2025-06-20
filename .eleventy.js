const { DateTime } = require("luxon"); // Add this line at the very top

module.exports = function(eleventyConfig) {
    // Passthrough copies (ensure these match any other static assets you have)
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("movies.js");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("movie-detail.html"); // <--- This line was already good!

    // Custom date filter for Nunjucks using Luxon
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        // Example format: 01 Jan 2025
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
    });

    // Custom filter for HTML datetime attribute (e.g., <time datetime="2025-01-01">)
    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
    });

    // IMPORTANT FOR LOCAL DEVELOPMENT:
    // Temporarily comment out or remove these lines when developing locally.
    // Uncomment them ONLY when building for deployment to GitHub Pages
    // or another server where your site lives in a subfolder like /TheMovieHub/.

    // eleventyConfig.addGlobalData("pathPrefix", "/TheMovieHub/"); // Commented out for local development

    return {
        dir: {
            input: ".", // Your main project root
            includes: "_includes",
            data: "_data",
            output: "_site" // <<-- Make sure this is exactly "_site"
        },
        // IMPORTANT FOR LOCAL DEVELOPMENT:
        // Temporarily comment out or remove this line when developing locally.
        // Uncomment it ONLY when building for deployment.
        // pathPrefix: "/TheMovieHub/" // Commented out for local development
    };
};