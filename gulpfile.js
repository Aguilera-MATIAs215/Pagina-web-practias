import { src, dest, watch } from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';

// Crea una instancia de gulp-sass utilizando dartSass
const gulpSassInstance = gulpSass(sass);

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
        .pipe(gulpSassInstance({
            silenceDeprecations: ['legacy-js-api'] // Añade la opción aquí
        }).on('error', gulpSassInstance.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));

    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css);
}
