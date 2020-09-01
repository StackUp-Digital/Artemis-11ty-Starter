// Eleventy Config
module.exports = (eleventyConfig) => {
  // Include our static assets
  eleventyConfig.addPassthroughCopy({
    'web/assets': 'assets',
  })

  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
  })

  // Change the structure to make it easier to follow
  return {
    dir: {
      input: 'web',
      output: 'dist',
      includes: '_includes',
      data: '_data',
    },
  }
}
