const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')

less.compiler = require('node-less')

gulp.task('less', () => {
  return gulp.src('./src/styles/index.less')
    .pipe(less())
    .pipe(gulp.dest('./lib/css'));
})
