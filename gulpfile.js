const gulp = require('gulp')
const less = require('gulp-less')(require('less'))
const concat = require('gulp-concat')

less.compiler = require('node-less')

gulp.task('less', () => {
  return gulp
    .src('src/styles/index.less')
    .pipe(concat('inde.scss'))
    .pipe(
      less({
        includePaths: ['node_modules'],
        outputStyle: 'compressed',
      }).on('error', (e) => console.error(e)),
    )
    .pipe(gulp.dest('lib/styles/'))
})
