const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const cssnano = require("gulp-cssnano");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
// https://www.npmjs.com/package/webpack-stream
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js"); // webpack config file in root
const clean = require("gulp-clean");
const nunjucks = require('gulp-nunjucks');
const styleInject = require("gulp-style-inject");

const useStyleInject = false;
// REPLACE Style import from the default layout if you want to use style injection instead
// PUT this in it's place: <!-- inject-style src="style.css" -->

const path = {
  sass: "src/scss/**/*.scss",
  entry: "src/js/index.js",
  js: "src/js/**/*.js",
  images: "src/images/*",
  nunjucks: [
    "src/nunjucks/**/*",         //select all files
    "!src/nunjucks/_*/**",      //exclude folders starting with '_'
  ],
  static: "static/**/*.*"
};

// Styles task for production `gulp styles`
gulp.task("prod-styles", function() {
  return gulp
    .src(path.sass) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on("error", sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(
      postcss([
        autoprefixer({
          browsers: [">3%"],
          cascade: false, // removes prefixed indentation
          grid: true // grid prefixing => https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/
        })
      ])
    )
    .pipe(cssnano({ reduceIdents: false, zindex: false })) // this helps prevent breaking animations // for mini-fying CSS, leaving off for now
    .pipe(useStyleInject ? gulp.dest('src/scss') : gulp.dest("dist/")); // Outputs it in the root folder
});

// Styles task for development with sourcemaps `gulp`
gulp.task("sass", function() {
  return gulp
    .src(path.sass) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init()) // Init sourcemaps
    .pipe(sass().on("error", sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(sourcemaps.write()) // Write it, it's embedded, making the file much larger. Should be turned off for Production
    .pipe(useStyleInject ? gulp.dest('src/scss') : gulp.dest("dist"));
});

gulp.task("images", function() {
  return gulp
    .src(path.images)
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
});

gulp.task("nunjucks", function() {
  if (useStyleInject) {
    return gulp
      .src(path.nunjucks)
      .pipe(
        nunjucks.compile({
          /* options or data */
          data: 'test'
        })
      )
      .pipe(
        styleInject({
          encapsulated: true,
          path: './dist/'
        })
      )
      .pipe(gulp.dest("dist/"));
  } else {
    return gulp
      .src(path.nunjucks)
      .pipe(
        nunjucks.compile({
          /* options */
          data: 'test'
        })
      )
      .pipe(gulp.dest("dist/"));
  }
});

gulp.task("js", function() {
  return gulp
    .src(path.entry)
    .pipe(webpackStream(webpackConfig))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("static", function() {
  return gulp.src(path.static).pipe(gulp.dest("dist/"));
})

// Static Server + watching all our files
gulp.task("watch", function() {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch(path.sass, gulp.series("sass")).on("change", browserSync.reload);
  gulp.watch(path.nunjucks, gulp.series("nunjucks")).on("change", browserSync.reload);
  gulp.watch(path.js, gulp.series("js")).on("change", browserSync.reload);
  gulp.watch(path.images, gulp.series("images")).on("change", browserSync.reload);
});

gulp.task("clean", function() {
  return gulp.src("./dist", { read: false, allowEmpty: true }).pipe(clean());
});

// Build `gulp build`
// ! Build for production then stop
gulp.task("build", gulp.series("clean", "nunjucks", "images", "prod-styles", "js", "static"));

// Default `gulp`
// ! Build for development then watch
gulp.task("default", gulp.series("clean", "nunjucks", "images", "sass", "js", "static", "watch"));