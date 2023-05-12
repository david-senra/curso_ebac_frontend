const gulpJs = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulpJs.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulpJs.dest('./build/styles/'))
}

function comprimeJavascript() {
    return gulpJs.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulpJs.dest('./build/scripts'))
}

function comprimeImagens() {
    return gulpJs.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulpJs.dest('./build/images/'))
}

exports.default = function() {
    gulpJs.watch('./src/styles/*.scss', { ignoreInitial: false }, gulpJs.series(compilaSass));
    gulpJs.watch('./src/images/*', { ignoreInitial: false }, gulpJs.series(comprimeImagens));
    gulpJs.watch('./src/scripts/*.js', { ignoreInitial: false }, gulpJs.series(comprimeJavascript));
}
exports.sass = compilaSass;
exports.javascript = comprimeJavascript;
exports.images = comprimeImagens;