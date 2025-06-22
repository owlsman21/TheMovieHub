module.exports = function(eleventyConfig) {

  // Passthrough copy for asset folders from 'src' to '_site'
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");

  // Passthrough copy for specific root-level files from 'src'
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // Determine base path based on environment
  // For production (GitHub Pages), use the repository name as the pathPrefix.
  // For local development, use '/' for serving with `npm run start`.
  // If you want to open files directly locally (without a server), you might set this to './'
  // and adjust your HTML links accordingly. Sticking to '/' for consistency with Eleventy's --serve.
  const isProd = process.env.NODE_ENV === "production";
  const pathPrefix = isProd ? "/TheMovieHub/" : "/";

  // Configure Eleventy's input, output, and path prefix
  return {
    dir: {
      input: "src", // Source content files are in the 'src' directory
      output: "_site" // Eleventy will build the site into the '_site' directory
    },
    pathPrefix: pathPrefix, // Apply the determined pathPrefix

    // Specify template formats Eleventy should process
    templateFormats: ["html", "njk", "md"], // Process HTML, Nunjucks, and Markdown files
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk", // Use Nunjucks for HTML files
    dataTemplateEngine: "njk", // Use Nunjucks for data files

    // Crucial: Set to true to allow `addPassthroughCopy` to work
    passthroughFileCopy: true,

    // This is the most important part for excluding README.md
    // It tells Eleventy to ignore this specific file if it finds it in the input directory.
    // If your README.md is in your project root (outside 'src'), Eleventy usually ignores it by default.
    // However, if it's being picked up, this makes sure it's explicitly excluded from the build.
    // This assumes your main content is within 'src'.
    // If README.md is directly in 'src', this will prevent it from being copied.
    // If it's in the root of your *project* (which is most common), this setting is extra robust.
    ignores: ["README.md"]
  };
};