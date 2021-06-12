import gulp from 'gulp';
import sass from 'gulp-sass';
import yargs from 'yargs';
import gulpif from 'gulp-if';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import log from 'fancy-log';


log('PRODUCTION: ' + yargs.argv.prod)

const config = {
  production:  yargs.argv.prod,
  src: {
      js: './src/js/**/*.js',
      sass: './src/scss/**/*.scss',
      // img: ['./src/images/**/*', '!./src/images/**/*.svg'],
      // svg: ['./src/svg/**/*.svg'],
  },
  dist: {
      base: './assets',
      js: './assets/js',
      css: './',
      // img: './assets/images',
      // svg: './assets/svg',
  },
  // banner: {
  //     theme:
  //         '/*!\n' +
  //         ' * Theme Name: <%= pkg.title %>\n' +
  //         ' * Theme URI: <%= pkg.url %>\n' +
  //         ' * Description: <%= pkg.title %> theme created by <%= pkg.author.name %>.\n' +
  //         ' * Author: <%= pkg.author.name %>\n' +
  //         ' * Author URI: <%= pkg.author.url %>\n' +
  //         ' * Version: <%= pkg.version %>\n' +
  //         ' * Text Domain: <%= pkg.name %>\n' +
  //         ' */\n'
  // }
}

const paths = {
  styles: {
    src: ['src/scss/styles.scss'],
    dest: 'dist/assets/css'
  }
}

export const scss = () => {
  return gulp.src(paths.styles.src)
    .pipe( gulpif(
      !config.production, sourcemaps.init()
    ))
    .pipe( sass().on('error', sass.logError ))
    .pipe( gulpif(
      config.production, cleanCSS({ compatibility: 'i8' } )
    ))
    .pipe( gulpif(
      !config.production, sourcemaps.write()
    ))
    .pipe( gulp.dest( paths.styles.dest ))
}

const js = (done) => {
    const combinedConfig = {
        mode: config.production ? 'production' : 'development',
        watch: !config.production,
        ...webpackConfig
    }

    const x = webpack(combinedConfig, (error, stats) => {
        if (error) {
            console.log(error)
        }

        log(
            '[Webpack]\n',
            stats.toString({
                colors: true,
                progress: true
            })
        )
    })

    done()
}

const watch = () => {
  gulp.watch(config.src.js, js)
  gulp.watch(config.src.sass, scss)
}


gulp.task('default', gulp.series(gulp.parallel(scss, js) , watch ))
gulp.task(
    'build',
    gulp.parallel(scss, js)
)