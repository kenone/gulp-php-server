var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');

gulp.task('connect-sync', () => {
  connect.server({base: 'app'}, () => {
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });

  gulp.watch('app/*.php').on('change',  () => {
    browserSync.reload();
  });


});

gulp.task('default', ['connect-sync']);
