// Laravel Mix
const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

require('laravel-mix-purgecss')

// Define paths
const paths = {
  scss: {
    source: './web/resources/styles/styles.scss',
    dest: './css/',
  },
  js: {
    source: './web/resources/js/index.js',
    dest: './js/',
  },
}

mix.setPublicPath('./dist/assets/')

// Compile the scss code
mix
  .sass(paths.scss.source, paths.scss.dest)
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
  })
  .purgeCss({
    enabled: mix.inProduction(),
    folders: ['src', 'templates'],
    extensions: ['html', 'js', 'php', 'vue'],
  })
  .js(paths.js.source, paths.js.dest)
  .js('./web/resources/js/a11y.js', './js/')

// If production, minify css/js
if (mix.inProduction()) {
  mix.minify('./dist/assets/css/styles.css').minify('./dist/assets/js/index.js')
}
