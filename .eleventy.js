module.exports = function(eleventyConfig) {

  // Passthrough copy for asset folders (adjust paths relative to the new input: ".")
  // If your assets were originally in `src/assets`, and `input` is now `.`,
  // then they will be copied from `./assets`. Ensure your folder structure matches this.
  // Based on your previous file tree (image_feb06b.png, image_ff2122.png),
  // assets, css, fonts, images are already directly in the root, so these paths are correct.
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");

  // Passthrough copy for specific root-level files
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");


  const isProd = process.env.NODE_ENV === "production";
  const pathPrefix = isProd ? "/TheMovieHub/" : "/";

  return {
    dir: {
      input: ".", // <<<<<<<<<<<<<<<< CHANGE THIS LINE to "."
      output: "_site"
    },
    pathPrefix: pathPrefix,

    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    passthroughFileCopy: true,

    // This is still good to keep for explicit exclusion if README.md were templated.
    ignores: ["README.md"]
  };
};