var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

var notifyError = function(){
  return plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  })
};


gulp.task('watch', function(){

  gulp.watch('./scss/*.scss', ['sass']);

});

gulp.task('sass', function(){

  gulp.src('./scss/*.scss')
    .pipe( notifyError() )
    .pipe( sass() )
    .pipe( gulp.dest('./css') );
});