const sass = require("gulp-sass");
const reporter = require("postcss-reporter");
const syntax = require("postcss-scss");
const stylelint = require("stylelint");
const postcss = require("gulp-postcss");
const tildeImporter = require("node-sass-tilde-importer");

const { dest, series, src, watch } = require("gulp");

/**
 * Compile .scss into .css for client side rendering
 * @param {function} cb
 */
function styles(cb) {
  const source = "resources/scss/**/*.scss";
  const target = "_includes/css";

  const options = {
    outputStyle: process.env.NODE_ENV === "production" ? "compressed" : "nested",
    importer: tildeImporter,
  };

  src(source).pipe(sass(options).on("error", sass.logError)).pipe(dest(target));

  console.log("Alright, css was compiled successfully :)");

  cb();
}

function linter(cb) {
  const source = "resources/scss/**/*.scss";

  const processors = [
    stylelint(require("@stackupdigital/artemis-css-standards")),
    reporter({
      clearReportedMessages: true,
    }),
  ];

  src(source).pipe(postcss(processors, { syntax: syntax }));

  cb();
}

/**
 * Watch files and perform various tasks.
 * We only need to run the scss compilation for now
 */
function watcher(cb) {
  watch(["resources/scss/**/*.scss"], series(styles, linter));
  cb();
}

/**
 * Exported (public) tasks
 */
exports.default = series(styles);
exports.watcher = watcher;
exports.linter = linter;
