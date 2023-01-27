/* eslint-disable */
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const rename = require('gulp-rename')

function compileSCSS(src, newName) {
  return gulp.src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      //"maxLineLen": 80,
      'uglifyComments': false
    }))
    .pipe(rename(newName))
    .pipe(gulp.dest('./'))
}

function watch() {
  return [
    gulp.watch('./styles/scss/*.scss', compileSCSS('./styles/compiled.scss', './styles/main.css')),
    gulp.watch('./styles/scss/*.scss', compileSCSS('./styles/scss/404.scss', './styles/404.css'))
  ]
}

exports.default = watch;
exports.watch = watch;
exports.compileSCSS = compileSCSS;