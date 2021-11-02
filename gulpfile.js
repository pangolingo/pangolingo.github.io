var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');
    // sass = require('gulp-ruby-sass'),
    // autoprefixer = require('gulp-autoprefixer'),

function build() {
  return gulp.src(['css/*.css', '!css/*.min.css'])
    .pipe(minifycss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
}
gulp.task('build', build);

gulp.task('watch', function() {
  return gulp.watch(['css/*.css', '!css/*.min.css'], build)
});