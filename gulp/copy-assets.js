/*
  copy.js
  ===========
  copies images and javascript folders to public
*/

var gulp = require('gulp')
var config = require('./config.json')

gulp.task('copy-assets', function () {
  return gulp.src(['!' + config.paths.assets + 'sass{,/**/*}',
    config.paths.assets + '/**'])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy-documentation-assets', function () {
  return gulp.src(['!' + config.paths.docsAssets + 'sass{,/**/*}',
    config.paths.docsAssets + '/**'])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy-assets-beta', function () {
  return gulp.src(['!' + config.paths.assetsbeta + 'sass{,/**/*}',
    config.paths.assetsbeta + '/**'])
  .pipe(gulp.dest(config.paths.publicbeta))
})

gulp.task('copy-documentation-assets-beta', function () {
  return gulp.src(['!' + config.paths.docsAssetsbeta + 'sass{,/**/*}',
    config.paths.docsAssetsbeta + '/**'])
  .pipe(gulp.dest(config.paths.publicbeta))
})

gulp.task('copy-assets-L1', function () {
    return gulp.src(['!' + config.paths.assetsL1 + 'sass{,/**/*}',
    config.paths.assetsL1 + '/**'])
        .pipe(gulp.dest(config.paths.publicL1))
})

gulp.task('copy-documentation-assets-L1', function () {
    return gulp.src(['!' + config.paths.docsAssetsL1 + 'sass{,/**/*}',
    config.paths.docsAssetsL1 + '/**'])
        .pipe(gulp.dest(config.paths.publicL1))
})

gulp.task('copy-assets-L5', function () {
    return gulp.src(['!' + config.paths.assetsL5 + 'sass{,/**/*}',
    config.paths.assetsL5 + '/**'])
        .pipe(gulp.dest(config.paths.publicL5))
})

gulp.task('copy-documentation-assets-L5', function () {
    return gulp.src(['!' + config.paths.docsAssetsL5 + 'sass{,/**/*}',
    config.paths.docsAssetsL5 + '/**'])
        .pipe(gulp.dest(config.paths.publicL5))
})