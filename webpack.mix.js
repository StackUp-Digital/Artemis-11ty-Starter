// Laravel Mix
const mix = require('laravel-mix')

mix.setPublicPath('./dist/assets/')

// Compile css and js
mix
  .sass('./web/resources/styles/styles.scss', './css')
  .options({ processCssUrls: false })
  .js('./web/resources/js/index.js', './js/')

if (!mix.inProduction()) {
  mix.js('./web/resources/js/a11y.js', './js/')
}

// If production, minify css/js
if (mix.inProduction()) {
  mix.minify('./dist/assets/css/styles.css').minify('./dist/assets/js/index.js')
}
