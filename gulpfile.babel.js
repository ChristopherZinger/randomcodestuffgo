import gulp from 'gulp';
import sass from 'gulp-sass';
import yargs from 'yargs';
import gulpif from 'gulp-if';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

const PRODUCTION = yargs.argv.prod;

const paths = {
  styles: {
    src: ['src/scss/styles.scss'],
    dest: 'dist/assets/css'
  }
}

export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe( gulpif(
      !PRODUCTION, sourcemaps.init()
    ))
    .pipe( sass().on('error', sass.logError ))
    .pipe( gulpif(
      PRODUCTION, cleanCSS({ compatibility: 'i8' } )
    ))
    .pipe( gulpif(
      !PRODUCTION, sourcemaps.write()
    ))
    .pipe( gulp.dest( paths.styles.dest ))
}

export const watch = () => {
  gulp.watch('src/scss/**/*.scss', styles)
}