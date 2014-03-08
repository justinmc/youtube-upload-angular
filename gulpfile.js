var gulp = require('gulp');

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');

var bases = {
    app: 'app/',
    dist: 'dist/'
};

var paths = {
    scripts: bases.app + 'youtube_upload.js',
    html: bases.app + 'youtube_upload.html',
};

gulp.task('clean', function() {
    return gulp.src(bases.dist)
        .pipe(clean());
});


gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest(bases.dist));
});

gulp.task('copy', function() {
    // copy html
    gulp.src(paths.html)
        .pipe(gulp.dest(bases.dist));
});

gulp.task('default', ['clean', 'scripts', 'copy']);

