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

gulp.task('watch-sass-S1', function () {
  return gulp.watch(config.paths.assetsS1 + 'sass/**', {cwd: './'}, ['sass-S1']);
})

gulp.task('watch-assets-S1', function () {
  return gulp.watch([config.paths.assetsS1 + 'images/**',
    config.paths.assetsS1 + 'javascripts/**',
    config.paths.assetsS1 + 'data/**'], {cwd: './'}, ['copy-assets-S1']);
})

gulp.task('watch-sass-S2', function () {
  return gulp.watch(config.paths.assetsS2 + 'sass/**', {cwd: './'}, ['sass-S2']);
})

gulp.task('watch-assets-S2', function () {
  return gulp.watch([config.paths.assetsS2 + 'images/**',
    config.paths.assetsS2 + 'javascripts/**',
    config.paths.assetsS2 + 'data/**'], {cwd: './'}, ['copy-assets-S2']);
})

gulp.task('watch-sass-S3', function () {
  return gulp.watch(config.paths.assetsS3 + 'sass/**', {cwd: './'}, ['sass-S3']);
})

gulp.task('watch-assets-S3', function () {
  return gulp.watch([config.paths.assetsS3 + 'images/**',
    config.paths.assetsS3 + 'javascripts/**',
    config.paths.assetsS3 + 'data/**'], {cwd: './'}, ['copy-assets-S3']);
})

gulp.task('watch-sass-S4', function () {
  return gulp.watch(config.paths.assetsS4 + 'sass/**', {cwd: './'}, ['sass-S4']);
})

gulp.task('watch-assets-S4', function () {
  return gulp.watch([config.paths.assetsS4 + 'images/**',
    config.paths.assetsS4 + 'javascripts/**',
    config.paths.assetsS4 + 'data/**'], {cwd: './'}, ['copy-assets-S4']);
})

gulp.task('watch-sass-S5', function () {
  return gulp.watch(config.paths.assetsS5 + 'sass/**', {cwd: './'}, ['sass-S5']);
})

gulp.task('watch-assets-S5', function () {
  return gulp.watch([config.paths.assetsS5 + 'images/**',
    config.paths.assetsS5 + 'javascripts/**',
    config.paths.assetsS5 + 'data/**'], {cwd: './'}, ['copy-assets-S5']);
})

gulp.task('watch-sass-S6', function () {
  return gulp.watch(config.paths.assetsS6 + 'sass/**', {cwd: './'}, ['sass-S6']);
})

gulp.task('watch-assets-S6', function () {
  return gulp.watch([config.paths.assetsS6 + 'images/**',
    config.paths.assetsS6 + 'javascripts/**',
    config.paths.assetsS6 + 'data/**'], {cwd: './'}, ['copy-assets-S6']);
})

gulp.task('watch-sass-S7', function () {
  return gulp.watch(config.paths.assetsS7 + 'sass/**', {cwd: './'}, ['sass-S7']);
})

gulp.task('watch-assets-S7', function () {
  return gulp.watch([config.paths.assetsS7 + 'images/**',
    config.paths.assetsS7 + 'javascripts/**',
    config.paths.assetsS7 + 'data/**'], {cwd: './'}, ['copy-assets-S7']);
})

gulp.task('watch-sass-S8', function () {
  return gulp.watch(config.paths.assetsS8 + 'sass/**', {cwd: './'}, ['sass-S8']);
})

gulp.task('watch-assets-S8', function () {
  return gulp.watch([config.paths.assetsS8 + 'images/**',
    config.paths.assetsS8 + 'javascripts/**',
    config.paths.assetsS8 + 'data/**'], {cwd: './'}, ['copy-assets-S8']);
})

gulp.task('watch-sass-S9', function () {
  return gulp.watch(config.paths.assetsS9 + 'sass/**', {cwd: './'}, ['sass-S9']);
})

gulp.task('watch-assets-S9', function () {
  return gulp.watch([config.paths.assetsS9 + 'images/**',
    config.paths.assetsS9 + 'javascripts/**',
    config.paths.assetsS9 + 'data/**'], {cwd: './'}, ['copy-assets-S9']);
})

gulp.task('watch-sass-S10', function () {
  return gulp.watch(config.paths.assetsS10 + 'sass/**', {cwd: './'}, ['sass-S10']);
})

gulp.task('watch-assets-S10', function () {
  return gulp.watch([config.paths.assetsS10 + 'images/**',
    config.paths.assetsS10 + 'javascripts/**',
    config.paths.assetsS10 + 'data/**'], {cwd: './'}, ['copy-assets-S10']);
})

gulp.task('watch-sass-S11', function () {
  return gulp.watch(config.paths.assetsS11 + 'sass/**', {cwd: './'}, ['sass-S11']);
})

gulp.task('watch-assets-S11', function () {
    return gulp.watch([config.paths.assetsS11 + 'images/**',
    config.paths.assetsS10 + 'javascripts/**',
    config.paths.assetsS10 + 'data/**'], { cwd: './' }, ['copy-assets-S11']);
})

gulp.task('watch-sass-S19', function () {
    return gulp.watch(config.paths.assetsS19 + 'sass/**', { cwd: './' }, ['sass-S19']);
})

gulp.task('watch-assets-S19', function () {
    return gulp.watch([config.paths.assetsS19 + 'images/**',
    config.paths.assetsS19 + 'javascripts/**',
    config.paths.assetsS19 + 'data/**'], { cwd: './' }, ['copy-assets-S19']);
})

gulp.task('watch-sass-S20', function () {
    return gulp.watch(config.paths.assetsS20 + 'sass/**', { cwd: './' }, ['sass-S20']);
})

gulp.task('watch-assets-S20', function () {
    return gulp.watch([config.paths.assetsS20 + 'images/**',
    config.paths.assetsS20 + 'javascripts/**',
    config.paths.assetsS20 + 'data/**'], { cwd: './' }, ['copy-assets-S20']);
})

gulp.task('watch-sass-S23', function () {
    return gulp.watch(config.paths.assetsS23 + 'sass/**', { cwd: './' }, ['sass-S23']);
})

gulp.task('watch-assets-S23', function () {
    return gulp.watch([config.paths.assetsS23 + 'images/**',
    config.paths.assetsS23 + 'javascripts/**',
    config.paths.assetsS23 + 'data/**'], { cwd: './' }, ['copy-assets-S23']);
})

gulp.task('watch-sass-S25', function () {
    return gulp.watch(config.paths.assetsS25 + 'sass/**', { cwd: './' }, ['sass-S25']);
})

gulp.task('watch-assets-S25', function () {
    return gulp.watch([config.paths.assetsS25 + 'images/**',
    config.paths.assetsS25 + 'javascripts/**',
    config.paths.assetsS25 + 'data/**'], { cwd: './' }, ['copy-assets-S25']);
})

gulp.task('watch-sass-S26', function () {
    return gulp.watch(config.paths.assetsS26 + 'sass/**', { cwd: './' }, ['sass-S26']);
})

gulp.task('watch-assets-S26', function () {
    return gulp.watch([config.paths.assetsS26 + 'images/**',
    config.paths.assetsS26 + 'javascripts/**',
    config.paths.assetsS26 + 'data/**'], { cwd: './' }, ['copy-assets-S26']);
})

gulp.task('watch-sass-S31', function () {
    return gulp.watch(config.paths.assetsS31 + 'sass/**', { cwd: './' }, ['sass-S31']);
})

gulp.task('watch-assets-S31', function () {
    return gulp.watch([config.paths.assetsS31 + 'images/**',
    config.paths.assetsS31 + 'javascripts/**',
    config.paths.assetsS31 + 'data/**'], { cwd: './' }, ['copy-assets-S31']);
})

gulp.task('watch-sass-L1', function () {
    return gulp.watch(config.paths.assetsL1 + 'sass/**', { cwd: './' }, ['sass-L1']);
})

gulp.task('watch-assets-L1', function () {
    return gulp.watch([config.paths.assetsL1 + 'images/**',
    config.paths.assetsL1 + 'javascripts/**',
    config.paths.assetsL1 + 'data/**'], { cwd: './' }, ['copy-assets-L1']);
})