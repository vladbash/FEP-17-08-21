const gulp = require('gulp');
const sassCompiler = require('sass');
const gulpSass = require('gulp-sass')(sassCompiler);
const gulpConcatCss = require('gulp-concat-css');
const del = require('del');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');

function defaultTask(cb) {
    console.log('Gulp works!');
    setTimeout(cb, 3000);
}

// TODO: Homework
function cleanUpDist(cb) {
    return del('./dist', { force: true }, cb);
}

function buildStyles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(gulpSass())
        .pipe(gulpConcatCss('styles.css'))
        .pipe(gulp.dest('./dist'));
}

function buildScripts() {
    return gulp.src(['./src/**/*.js', './server.js'])
        .pipe(concat('script.js'))
        .pipe(minify())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
}

function watchStyles() {
    gulp.watch('./src/styles/*.scss', buildStyles);
}

function watchScripts() {
    gulp.watch('./src/**/*.js', buildScripts);
}

exports.watchStyles = watchStyles;
exports.watchScripts = watchScripts;
exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.default = defaultTask;

exports.build = gulp.series(
    cleanUpDist,
    gulp.parallel(buildStyles, buildScripts)
);
