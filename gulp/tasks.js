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
    'sass-L6',
    'sass-documentation-L6', 
    'sass-L7',
    'sass-documentation-L7', 
    'sass-L8',
    'sass-documentation-L8', 
    'copy-assets',
    'copy-documentation-assets',
    'copy-assets-L1',
    'copy-documentation-assets-L1',
    'copy-assets-L5',
    'copy-documentation-assets-L5',
    'copy-assets-L6',
    'copy-documentation-assets-L6',
    'copy-assets-L7',
    'copy-documentation-assets-L8',
    'copy-assets-L8',
    'copy-documentation-assets-L8',



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
    'watch-sass-L7',
    'watch-assets-L7',
    'watch-sass-L8',
    'watch-assets-L8',

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
