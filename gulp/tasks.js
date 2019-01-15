/*
  tasks.js
  ===========
  defaults wraps generate-assets, watch and server
*/

var gulp = require('gulp')
var mocha = require('gulp-mocha')
var runSequence = require('run-sequence')

gulp.task('default', function (done) {
  runSequence('generate-assets',
                'watch',
                'server', done)
})

gulp.task('generate-assets', function (done) {
  runSequence('clean',
    'copy-govuk-modules',
    'sass',
    'sass-documentation',
    'sass-L1',
    'sass-documentation-L1', 
    'sass-L5',
    'sass-documentation-L5', 
    'copy-assets',
    'copy-documentation-assets',
    'copy-assets-L1',
    'copy-documentation-assets-L1',
    'copy-assets-L5',
    'copy-documentation-assets-L5',

    done)
})

gulp.task('copy-govuk-modules', [
  'copy-toolkit',
  'copy-template-assets',
  'copy-elements-sass',
  'copy-template'
])

gulp.task('watch', function (done) {
  runSequence('watch-sass',
    'watch-assets',
    'watch-sass-L1',
    'watch-assets-L1',
    'watch-sass-L5',
    'watch-assets-L5',

    done)
})

gulp.task('test', function () {
  runSequence('generate-assets',
              'mocha')
})

gulp.task('mocha', function () {
  return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .once('error', () => {
          process.exit(1)
        })
        .once('end', () => {
          process.exit()
        })
})
