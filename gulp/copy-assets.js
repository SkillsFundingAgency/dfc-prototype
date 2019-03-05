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

gulp.task('copy-assets-L6', function () {
    return gulp.src(['!' + config.paths.assetsL6 + 'sass{,/**/*}',
    config.paths.assetsL6 + '/**'])
        .pipe(gulp.dest(config.paths.publicL6))
})

gulp.task('copy-documentation-assets-L6', function () {
    return gulp.src(['!' + config.paths.docsAssetsL6 + 'sass{,/**/*}',
    config.paths.docsAssetsL6 + '/**'])
        .pipe(gulp.dest(config.paths.publicL6))
})

gulp.task('copy-assets-L7', function () {
    return gulp.src(['!' + config.paths.assetsL7 + 'sass{,/**/*}',
    config.paths.assetsL7 + '/**'])
        .pipe(gulp.dest(config.paths.publicL7))
})

gulp.task('copy-documentation-assets-L7', function () {
    return gulp.src(['!' + config.paths.docsAssetsL7 + 'sass{,/**/*}',
    config.paths.docsAssetsL7 + '/**'])
        .pipe(gulp.dest(config.paths.publicL7))
})

gulp.task('copy-assets-L8', function () {
    return gulp.src(['!' + config.paths.assetsL8 + 'sass{,/**/*}',
    config.paths.assetsL8 + '/**'])
        .pipe(gulp.dest(config.paths.publicL8))
})

gulp.task('copy-documentation-assets-L8', function () {
    return gulp.src(['!' + config.paths.docsAssetsL8 + 'sass{,/**/*}',
    config.paths.docsAssetsL8 + '/**'])
        .pipe(gulp.dest(config.paths.publicL8))
})

gulp.task('copy-assets-L9', function () {
    return gulp.src(['!' + config.paths.assetsL9 + 'sass{,/**/*}',
        config.paths.assetsL9 + '/**'])
        .pipe(gulp.dest(config.paths.publicL9))
})

gulp.task('copy-documentation-assets-L9', function () {
    return gulp.src(['!' + config.paths.docsAssetsL9 + 'sass{,/**/*}',
        config.paths.docsAssetsL9 + '/**'])
        .pipe(gulp.dest(config.paths.publicL9))
})