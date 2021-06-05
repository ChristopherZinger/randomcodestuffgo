import gulp from 'gulp';
import sass from 'gulp-sass';
import yargs from 'yargs';
import gulpif from 'gulp-if';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

const PRODUCTION = yargs.argv.prod;

gulp.task('default', mainTask);

export const styles = () => {
  return gulp.src('src/scss/styles.scss' )
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
    .pipe( gulp.dest('dist/assets/css' ))
}

function mainTask (done) {
  console.log("Gulp: Main Task - running all tasks.")
  done();
}