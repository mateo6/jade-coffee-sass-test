var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');

gulp.task('sass', function() {
  gulp.src('dev/sass/main.sass')
    .pipe(sass())
    // .pipe(autoprefixer({
    //   browsers: ['last 2 versions'],
    //   cascade: true
    // }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('jade', function() {
  gulp.src('dev/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/'));
});

gulp.task('coffee', function() {
  gulp.src('dev/coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
  gulp.watch('dev/sass/*.sass', ['sass']);
});


// gulp.task('default', ['watch', 'scripts', 'images']);
gulp.task('default', ['watch']);

//http://stagingcs2.mashery.com/
