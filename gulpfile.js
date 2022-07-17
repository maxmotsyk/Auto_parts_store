const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error',sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./css/'))
};

function watchScss(){
  gulp.watch('./scss/**/*.scss',gulp.series('buildStyles'))
}

exports.buildStyles = buildStyles;
exports.watchScss = watchScss;