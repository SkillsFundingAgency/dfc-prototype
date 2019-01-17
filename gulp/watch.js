/*
  watch.js
  ===========
  watches sass/js/images
*/

var gulp = require('gulp')
var config = require('./config.json')

gulp.task('watch-sass', function () {
  return gulp.watch(config.paths.assets + 'sass/**', {cwd: './'}, ['sass']);
})

gulp.task('watch-assets', function () {
  return gulp.watch([config.paths.assets + 'images/**',
    config.paths.assets + 'javascripts/**'], {cwd: './'}, ['copy-assets']);
})

gulp.task('watch-sass-beta', function () {
  return gulp.watch(config.paths.assetsbeta + 'sass/**', {cwd: './'}, ['sass-S1']);
})

gulp.task('watch-assets-beta', function () {
  return gulp.watch([config.paths.assetsbeta + 'images/**',
    config.paths.assetsbeta + 'javascripts/**'], {cwd: './'}, ['copy-assets-S1']);
})

gulp.task('watch-sass-L1', function () {
    return gulp.watch(config.paths.assetsL1 + 'sass/**', { cwd: './' }, ['sass-L1']);
})

gulp.task('watch-assets-L1', function () {
    return gulp.watch([config.paths.assetsL1 + 'images/**',
    config.paths.assetsL1 + 'javascripts/**',
    config.paths.assetsL1 + 'data/**'], { cwd: './' }, ['copy-assets-L1']);
})

gulp.task('watch-sass-L5', function () {
    return gulp.watch(config.paths.assetsL5 + 'sass/**', { cwd: './' }, ['sass-L5']);
})

gulp.task('watch-assets-L5', function () {
    return gulp.watch([config.paths.assetsL5 + 'images/**',
    config.paths.assetsL5 + 'javascripts/**',
    config.paths.assetsL5 + 'data/**'], { cwd: './' }, ['copy-assets-L5']);
})


gulp.task('watch-sass-L6', function () {
    return gulp.watch(config.paths.assetsL6 + 'sass/**', { cwd: './' }, ['sass-L6']);
})

gulp.task('watch-assets-L6', function () {
    return gulp.watch([config.paths.assetsL6 + 'images/**',
    config.paths.assetsL6 + 'javascripts/**',
    config.paths.assetsL6 + 'data/**'], { cwd: './' }, ['copy-assets-L6']);
})