// Laravel Mix
const mix = require('laravel-mix')

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
mix.sass(paths.scss.source, paths.scss.dest).js(paths.js.source, paths.js.dest)

// If production, minify css/js
if (mix.inProduction()) {
  mix.minify('./dist/assets/css/styles.css').minify('./dist/assets/js/index.js')
}
