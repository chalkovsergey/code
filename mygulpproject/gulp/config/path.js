// Получение имя папки проекта
import * as nodePath from 'path';
const rootForder = nodePath.basename(nodePath.resolve());


const buildForder = `./dist`; // Также можно использовать rootForder
const srcForder = `./src`;

export const path = {
    build: {
        js: `${srcForder}/js/`,
        css: `${buildForder}/css/`,
        html: `${buildForder}/`,
        images: `${buildForder}/img/`,
        files: `${buildForder}/files/`
    },
    src: {
        js: `${srcForder}/js/app.js`,
        images: `${srcForder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcForder}/img/**/*.svg`,
        scss: `${srcForder}/scss/style.scss`,
        html: `${srcForder}/*.html`,
        files: `${srcForder}/files/**/*.*`,
    },
    watch: {
        js: `${srcForder}/js/**/*.js`,
        scss: `${srcForder}/scss/**/*.scss`,
        html: `${srcForder}/**/*.html`,
        images: `${srcForder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcForder}/files/**/*.*`
    },
    clean: buildForder,
    buildForder: buildForder,
    srcForder: srcForder,
    rootForder: rootForder,
    ftp: ``
}