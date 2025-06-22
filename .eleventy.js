const { DateTime } = require("luxon"); // Import Luxon

module.exports = function(eleventyConfig) {

  // Add a Nunjucks filter for date formatting
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // Luxon formatting:yyyy-MM-DD
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Passthrough copy for asset folders
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");

  // Passthrough copy for specific root-level files
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("script.js"); // Make sure this is here
  eleventyConfig.addPassthroughCopy("movies.js"); // Make sure this is here

  const isProd = process.env.NODE_ENV === "production";
  const pathPrefix = isProd ? "/TheMovieHub/" : "/";

  return {
    dir: {
      input: ".",
      output: "_site"
    },
    pathPrefix: pathPrefix,

    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    passthroughFileCopy: true,
    ignores: ["README.md"]
  };
};