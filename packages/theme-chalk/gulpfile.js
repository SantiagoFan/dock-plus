'use strict';

const { src, dest } = require('gulp');
const gulpSass = require('gulp-sass');
const sass = require('sass'); // 直接引入 sass
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-cssmin');

const sassCompiler = gulpSass(sass);

// 设置浏览器兼容性
function compile() {
  return src('./src/*.scss')
    .pipe(sassCompiler())
    .pipe(postcss([autoprefixer({
      grid: 'autoplace',
      overrideBrowserslist: ['ie > 9', 'last 2 versions']
    })]))
    .pipe(cssmin())
    .pipe(dest('./lib'));

}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));

}

const { series } = require('gulp');

exports.compile = compile;
exports.copyfont = copyfont;
exports.build = series(compile, copyfont);