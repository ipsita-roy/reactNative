'use strict';

const gulp = require('gulp');

const shared = './shared/**/*';
const destinations = ['../ReactNativePOC/shared/', '../react-js-web-app/src/shared/'];

function watch() {
    gulp.watch(shared, copyShared);
}

function copyShared() {
    return gulp.src([
        shared,
    ])
    .pipe(gulp.dest(destinations[0]))
	.pipe(gulp.dest(destinations[1]));
}

const build = gulp.series(copyShared, watch);

exports.watch = watch;
exports.default = build;


