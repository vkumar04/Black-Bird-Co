var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync').create();

//gulp sass task
gulp.task('scss', function(){
  return gulp.src('./scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

//browserSync task
gulp.task('browserSync', ['scss'], function(){
  browserSync.init({
    server: './'
  });
  //watch tasks
  gulp.watch("./scss/*.scss", ['scss']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

//default task
gulp.task('default', ['browserSync']);
