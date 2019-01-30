/*
  sass.js
  ===========
  compiles sass from assets folder with the govuk_modules
  also includes sourcemaps
*/

var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

var config = require('./config.json')

gulp.task('sass', function () {
  return gulp.src(config.paths.assets + '/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded',
    includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
      'govuk_modules/govuk_template/assets/stylesheets',
      'govuk_modules/govuk-elements-sass/']}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.paths.public + '/stylesheets/'))
})

gulp.task('sass-documentation', function () {
  return gulp.src(config.paths.docsAssets + '/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded',
    includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
      'govuk_modules/govuk_template/assets/stylesheets',
      'govuk_modules/govuk-elements-sass/']}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.paths.public + '/stylesheets/'))
})

gulp.task('sass-beta', function () {
  return gulp.src(config.paths.assetsbeta + '/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded',
    includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
      'govuk_modules/govuk_template/assets/stylesheets',
      'govuk_modules/govuk-elements-sass/']}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.paths.publicbeta + '/stylesheets/'))
})

gulp.task('sass-documentation-beta', function () {
  return gulp.src(config.paths.docsAssetsbeta + '/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded',
    includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
      'govuk_modules/govuk_template/assets/stylesheets',
      'govuk_modules/govuk-elements-sass/']}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.paths.publicbeta + '/stylesheets/'))
})

gulp.task('sass-L1', function () {
    return gulp.src(config.paths.assetsL1 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL1 + '/stylesheets/'))
})

gulp.task('sass-documentation-L1', function () {
    return gulp.src(config.paths.docsAssetsL1 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL1 + '/stylesheets/'))
})

gulp.task('sass-L5', function () {
    return gulp.src(config.paths.assetsL5 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL5 + '/stylesheets/'))
})

gulp.task('sass-documentation-L5', function () {
    return gulp.src(config.paths.docsAssetsL5 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL5 + '/stylesheets/'))
})

gulp.task('sass-L6', function () {
    return gulp.src(config.paths.assetsL6 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL6 + '/stylesheets/'))
})

gulp.task('sass-documentation-L6', function () {
    return gulp.src(config.paths.docsAssetsL6 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL6 + '/stylesheets/'))
})

gulp.task('sass-L7', function () {
    return gulp.src(config.paths.assetsL7 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL7 + '/stylesheets/'))
})

gulp.task('sass-documentation-L7', function () {
    return gulp.src(config.paths.docsAssetsL7 + '/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['govuk_modules/govuk_frontend_toolkit/stylesheets',
                'govuk_modules/govuk_template/assets/stylesheets',
                'govuk_modules/govuk-elements-sass/']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.publicL7 + '/stylesheets/'))
})