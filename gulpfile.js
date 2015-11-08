var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');
    // sass = require('gulp-ruby-sass'),
    // autoprefixer = require('gulp-autoprefixer'),

gulp.task('build', function() {
  return gulp.src('css/*.css')
    .pipe(minifycss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
});