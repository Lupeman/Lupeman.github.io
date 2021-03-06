var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

const sassPath = './app/scss/**/*.scss';

var sync = browserSync.create();

var handleError = function(error) {
  console.error('\nError: ', error.message, '\n');
  this.emit('end');
};

gulp.task('serve', ['transpile'], function(){
  sync.init({
    server:'app'
  });
});

gulp.task('sass-it', function(){
  return gulp.src(sassPath)
  .pipe(sass())
  .pipe(gulp.dest('./app/css'))
  .pipe(sync.reload({
    stream: true
  }));
});


gulp.task('transpile', function() {
  browserify('src/js/index.js')
  .transform(babelify, {presets: ['es2015', 'react']})
  .bundle()
  .on('error', handleError)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(sync.reload({
    stream:true
  }));
});

gulp.task('watch-it',['serve', 'sass-it'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass-it']);
  gulp.watch('src/js/**/*.js', ['transpile']);
  gulp.watch('app/index.html', sync.reload);
});

gulp.task('default', ['transpile']);
