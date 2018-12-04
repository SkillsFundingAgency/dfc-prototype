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

gulp.task('copy-assets-S1', function () {
  return gulp.src(['!' + config.paths.assetsS1 + 'sass{,/**/*}',
    config.paths.assetsS1 + '/**'])
  .pipe(gulp.dest(config.paths.publicS1))
})

gulp.task('copy-documentation-assets-S1', function () {
  return gulp.src(['!' + config.paths.docsAssetsS1 + 'sass{,/**/*}',
    config.paths.docsAssetsS1 + '/**'])
  .pipe(gulp.dest(config.paths.publicS1))
})

gulp.task('copy-assets-S2', function () {
  return gulp.src(['!' + config.paths.assetsS2 + 'sass{,/**/*}',
    config.paths.assetsS2 + '/**'])
  .pipe(gulp.dest(config.paths.publicS2))
})

gulp.task('copy-documentation-assets-S2', function () {
  return gulp.src(['!' + config.paths.docsAssetsS2 + 'sass{,/**/*}',
    config.paths.docsAssetsS2 + '/**'])
  .pipe(gulp.dest(config.paths.publicS2))
})

gulp.task('copy-assets-S3', function () {
  return gulp.src(['!' + config.paths.assetsS3 + 'sass{,/**/*}',
    config.paths.assetsS3 + '/**'])
  .pipe(gulp.dest(config.paths.publicS3))
})

gulp.task('copy-documentation-assets-S3', function () {
  return gulp.src(['!' + config.paths.docsAssetsS3 + 'sass{,/**/*}',
    config.paths.docsAssetsS3 + '/**'])
  .pipe(gulp.dest(config.paths.publicS3))
})

gulp.task('copy-assets-S4', function () {
  return gulp.src(['!' + config.paths.assetsS4 + 'sass{,/**/*}',
    config.paths.assetsS4 + '/**'])
  .pipe(gulp.dest(config.paths.publicS4))
})

gulp.task('copy-documentation-assets-S4', function () {
  return gulp.src(['!' + config.paths.docsAssetsS4 + 'sass{,/**/*}',
    config.paths.docsAssetsS4 + '/**'])
  .pipe(gulp.dest(config.paths.publicS4))
})

gulp.task('copy-assets-S5', function () {
  return gulp.src(['!' + config.paths.assetsS5 + 'sass{,/**/*}',
    config.paths.assetsS5 + '/**'])
  .pipe(gulp.dest(config.paths.publicS5))
})

gulp.task('copy-documentation-assets-S5', function () {
  return gulp.src(['!' + config.paths.docsAssetsS5 + 'sass{,/**/*}',
    config.paths.docsAssetsS5 + '/**'])
  .pipe(gulp.dest(config.paths.publicS5))
})

gulp.task('copy-assets-S6', function () {
  return gulp.src(['!' + config.paths.assetsS6 + 'sass{,/**/*}',
    config.paths.assetsS6 + '/**'])
  .pipe(gulp.dest(config.paths.publicS6))
})

gulp.task('copy-documentation-assets-S6', function () {
  return gulp.src(['!' + config.paths.docsAssetsS6 + 'sass{,/**/*}',
    config.paths.docsAssetsS6 + '/**'])
  .pipe(gulp.dest(config.paths.publicS6))
})

gulp.task('copy-assets-S7', function () {
  return gulp.src(['!' + config.paths.assetsS7 + 'sass{,/**/*}',
    config.paths.assetsS7 + '/**'])
  .pipe(gulp.dest(config.paths.publicS7))
})

gulp.task('copy-documentation-assets-S7', function () {
  return gulp.src(['!' + config.paths.docsAssetsS7 + 'sass{,/**/*}',
    config.paths.docsAssetsS7 + '/**'])
  .pipe(gulp.dest(config.paths.publicS7))
})

gulp.task('copy-assets-S8', function () {
  return gulp.src(['!' + config.paths.assetsS8 + 'sass{,/**/*}',
    config.paths.assetsS8 + '/**'])
  .pipe(gulp.dest(config.paths.publicS8))
})

gulp.task('copy-documentation-assets-S8', function () {
  return gulp.src(['!' + config.paths.docsAssetsS8 + 'sass{,/**/*}',
    config.paths.docsAssetsS8 + '/**'])
  .pipe(gulp.dest(config.paths.publicS8))
})

gulp.task('copy-assets-S9', function () {
  return gulp.src(['!' + config.paths.assetsS9 + 'sass{,/**/*}',
    config.paths.assetsS9 + '/**'])
  .pipe(gulp.dest(config.paths.publicS9))
})

gulp.task('copy-documentation-assets-S9', function () {
  return gulp.src(['!' + config.paths.docsAssetsS9 + 'sass{,/**/*}',
    config.paths.docsAssetsS9 + '/**'])
  .pipe(gulp.dest(config.paths.publicS9))
})

gulp.task('copy-assets-S10', function () {
  return gulp.src(['!' + config.paths.assetsS10 + 'sass{,/**/*}',
    config.paths.assetsS10 + '/**'])
  .pipe(gulp.dest(config.paths.publicS10))
})

gulp.task('copy-documentation-assets-S10', function () {
  return gulp.src(['!' + config.paths.docsAssetsS10 + 'sass{,/**/*}',
    config.paths.docsAssetsS10 + '/**'])
  .pipe(gulp.dest(config.paths.publicS10))
})

gulp.task('copy-assets-S11', function () {
    return gulp.src(['!' + config.paths.assetsS11 + 'sass{,/**/*}',
    config.paths.assetsS11 + '/**'])
        .pipe(gulp.dest(config.paths.publicS11))
})

gulp.task('copy-documentation-assets-S11', function () {
    return gulp.src(['!' + config.paths.docsAssetsS11 + 'sass{,/**/*}',
    config.paths.docsAssetsS11 + '/**'])
        .pipe(gulp.dest(config.paths.publicS11))
})

gulp.task('copy-assets-S19', function () {
    return gulp.src(['!' + config.paths.assetsS19 + 'sass{,/**/*}',
    config.paths.assetsS19 + '/**'])
        .pipe(gulp.dest(config.paths.publicS19))
})

gulp.task('copy-documentation-assets-S19', function () {
    return gulp.src(['!' + config.paths.docsAssetsS19 + 'sass{,/**/*}',
    config.paths.docsAssetsS19 + '/**'])
        .pipe(gulp.dest(config.paths.publicS19))
})

gulp.task('copy-assets-S20', function () {
    return gulp.src(['!' + config.paths.assetsS20 + 'sass{,/**/*}',
    config.paths.assetsS20 + '/**'])
        .pipe(gulp.dest(config.paths.publicS20))
})

gulp.task('copy-documentation-assets-S20', function () {
    return gulp.src(['!' + config.paths.docsAssetsS20 + 'sass{,/**/*}',
    config.paths.docsAssetsS20 + '/**'])
        .pipe(gulp.dest(config.paths.publicS20))
})

gulp.task('copy-assets-S23', function () {
    return gulp.src(['!' + config.paths.assetsS23 + 'sass{,/**/*}',
    config.paths.assetsS23 + '/**'])
        .pipe(gulp.dest(config.paths.publicS23))
})

gulp.task('copy-documentation-assets-S23', function () {
    return gulp.src(['!' + config.paths.docsAssetsS23 + 'sass{,/**/*}',
    config.paths.docsAssetsS23 + '/**'])
        .pipe(gulp.dest(config.paths.publicS23))
})

gulp.task('copy-assets-S25', function () {
    return gulp.src(['!' + config.paths.assetsS25 + 'sass{,/**/*}',
    config.paths.assetsS25 + '/**'])
        .pipe(gulp.dest(config.paths.publicS25))
})

gulp.task('copy-documentation-assets-S25', function () {
    return gulp.src(['!' + config.paths.docsAssetsS25 + 'sass{,/**/*}',
    config.paths.docsAssetsS25 + '/**'])
        .pipe(gulp.dest(config.paths.publicS25))
})

gulp.task('copy-assets-S26', function () {
    return gulp.src(['!' + config.paths.assetsS26 + 'sass{,/**/*}',
    config.paths.assetsS26 + '/**'])
        .pipe(gulp.dest(config.paths.publicS26))
})

gulp.task('copy-documentation-assets-S26', function () {
    return gulp.src(['!' + config.paths.docsAssetsS26 + 'sass{,/**/*}',
    config.paths.docsAssetsS26 + '/**'])
        .pipe(gulp.dest(config.paths.publicS26))
})

gulp.task('copy-assets-S31', function () {
    return gulp.src(['!' + config.paths.assetsS31 + 'sass{,/**/*}',
    config.paths.assetsS31 + '/**'])
        .pipe(gulp.dest(config.paths.publicS31))
})

gulp.task('copy-documentation-assets-S31', function () {
    return gulp.src(['!' + config.paths.docsAssetsS31 + 'sass{,/**/*}',
    config.paths.docsAssetsS31 + '/**'])
        .pipe(gulp.dest(config.paths.publicS31))
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