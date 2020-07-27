const sass = require("gulp-sass");
const { dest, series, src, watch } = require("gulp");

/**
 * Compile .scss into .css for client side rendering
 * @param {function} cb
 */
function styles(cb) {
  const source = "resources/scss/**/*.scss";
  const target = "_includes/css";

  const options = {
    outputStyle: process.env.NODE_ENV === "production" ? "compressed" : "nested"
  };

  src(source)
    .pipe(sass(options).on("error", sass.logError))
    .pipe(dest(target));

  console.log("Alright, css was compiled successfully :)");

  cb();
}

/**
 * Watch files and perform various tasks.
 * We only need to run the scss compilation for now
 */
function watcher(cb) {
  watch(["resources/scss/styles.scss"], series(styles));

  cb();
}

/**
 * Exported (public) tasks
 */
exports.default = series(styles);
exports.watcher = watcher;
