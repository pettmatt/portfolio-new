/* eslint-disable */
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const rename = require('gulp-rename')

function compileSCSS() {
  return gulp.src('./styles/compiled.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      //"maxLineLen": 80,
      'uglifyComments': true
    }))
    .pipe(rename('./styles/main.css'))
    .pipe(gulp.dest('./'))
}

function watch() {
  return gulp.watch('./styles/scss/*.scss', compileSCSS)
}

exports.default = watch;
exports.watch = watch;
exports.compileSCSS = compileSCSS;