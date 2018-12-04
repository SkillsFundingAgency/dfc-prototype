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
    //'sass-beta',
    //'sass-documentation-beta',
    //'sass-S1',
    //'sass-documentation-S1',
    //'sass-S2',
    //'sass-documentation-S2',
    //'sass-S3',
    //'sass-documentation-S3',
    //'sass-S4',
    //'sass-documentation-S4',
    //'sass-S5',
    //'sass-documentation-S5',
    //'sass-S6',
    //'sass-documentation-S6',
    //'sass-S7',
    //'sass-documentation-S7', 
    //'sass-S8',
    //'sass-documentation-S8', 
    //'sass-S9',
    //'sass-documentation-S9', 
    //'sass-S10',
    //'sass-documentation-S10',   
    'sass-S11',
    'sass-documentation-S11',   
    //'sass-S19',
    //'sass-documentation-S19',  
    //'sass-S20',
    //'sass-documentation-S20',  
    //'sass-S23',
    //  'sass-documentation-S23',  
      'sass-S25',
      'sass-documentation-S25',  
      'sass-S26',
      'sass-documentation-S26', 
      'sass-S31',
      'sass-documentation-S31', 
      'sass-L1',
      'sass-documentation-L1', 
    'copy-assets',
    'copy-documentation-assets',
    //'copy-assets-beta',
    //'copy-documentation-assets-beta',
    //'copy-assets-S1',
    //'copy-documentation-assets-S1',
    //'copy-assets-S2',
    //'copy-documentation-assets-S2',
    //'copy-assets-S3',
    //'copy-documentation-assets-S3',
    //'copy-assets-S4',                
    //'copy-documentation-assets-S4',
    //'copy-assets-S5',                
    //'copy-documentation-assets-S5',
    //'copy-assets-S6',
    //'copy-documentation-assets-S6',
    //'copy-assets-S7',
    //'copy-documentation-assets-S7',  
    //'copy-assets-S8',
    //'copy-documentation-assets-S8',
    //'copy-assets-S9',
    //'copy-documentation-assets-S9', 
    //'copy-assets-S10',
    //'copy-documentation-assets-S10',    
    'copy-assets-S11',
    'copy-documentation-assets-S11',  
    //'copy-assets-S19',
    //'copy-documentation-assets-S19',  
    //'copy-assets-S20',
    //'copy-documentation-assets-S20',  
    //'copy-assets-S23',
    //'copy-documentation-assets-S23',  
    'copy-assets-S25',
      'copy-documentation-assets-S25', 
      'copy-assets-S26',
      'copy-documentation-assets-S26',
      'copy-assets-S31',
      'copy-documentation-assets-S31',
      'copy-assets-L1',
      'copy-documentation-assets-L1',

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
    //'watch-sass-beta',
    //'watch-assets-beta',
    //'watch-sass-S1',
    //'watch-assets-S1',
    //'watch-sass-S2',
    //'watch-assets-S2', 
    //'watch-sass-S3',
    //'watch-assets-S3',
    //'watch-sass-S4',
    //'watch-assets-S4',
    //'watch-sass-S5',
    //'watch-assets-S5', 
    //'watch-sass-S6',
    //'watch-assets-S6',
    //'watch-sass-S7',
    //'watch-assets-S7', 
    //'watch-sass-S8',
    //'watch-assets-S8',
    //'watch-sass-S9',
    //'watch-assets-S9', 
    //'watch-sass-S10',
    //'watch-assets-S10',    
    'watch-sass-S11',
    'watch-assets-S11',    
    //'watch-sass-S19',
    //'watch-assets-S19',  
    //'watch-sass-S20',
    //'watch-assets-S20',  
    //'watch-sass-S23',
    //'watch-assets-S23', 
    'watch-sass-S25',
      'watch-assets-S25', 
      'watch-sass-S26',
      'watch-assets-S26',
      'watch-sass-S31',
      'watch-assets-S31',
      'watch-sass-L1',
      'watch-assets-L1',
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
