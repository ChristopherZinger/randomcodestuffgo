import gulp from 'gulp'
import sass from 'gulp-sass'
import yargs from 'yargs'
import path from 'path'
import gulpif from 'gulp-if'
import cleanCSS from 'gulp-clean-css'
import sourcemaps from 'gulp-sourcemaps'
import webpack from 'webpack'
import plumber from 'gulp-plumber'
import webpackConfig from './webpack.config.js'
import log from 'fancy-log'
import rename from 'gulp-rename'
import header from 'gulp-header'
import pkg from './package.json'
import notify from 'gulp-notify'

log('PRODUCTION: ' + yargs.argv.prod)

const config = {
    production: yargs.argv.prod,
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
    banner: {
        theme:
            '/*!\n' +
            ' * Theme Name: <%= pkg.title %>\n' +
            ' * Theme URI: <%= pkg.url %>\n' +
            ' * Description: <%= pkg.title %> theme created by <%= pkg.author.name %>.\n' +
            ' * Author: <%= pkg.author.name %>\n' +
            ' * Author URI: <%= pkg.author.url %>\n' +
            ' * Version: <%= pkg.version %>\n' +
            ' * Text Domain: <%= pkg.name %>\n' +
            ' */\n',
    },
    components: [
        path.join(__dirname, './node_modules/foundation-sites/scss')
    ]
}

// Copy JS
const copyJs = () => {
    const items = ['./node_modules/foundation-sites/dist/js/foundation.min.js']
    return gulp.src(items).pipe(gulp.dest(config.dist.js))
}

const js = (done) => {
    const combinedConfig = {
        mode: config.production ? 'production' : 'development',
        watch: !config.production,
        ...webpackConfig,
    }

    const x = webpack(combinedConfig, (error, stats) => {
        if (error) {
            console.log(error)
        }

        log(
            '[Webpack]\n',
            stats.toString({
                colors: true,
                progress: true,
            })
        )
    })

    done()
}

function css() {
    const onError = (err) => {
        notify.onError({
            title: 'SCSS Error',
            message: '<%= error.message %>',
        })(err)

        this.emit('end')
    }

    return gulp
        .src(config.src.sass)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                style: 'compressed',
                includePaths: config.components,
            })
        )
        .pipe(sourcemaps.write())
        .pipe(header(config.banner.theme, { pkg }))
        .pipe(gulp.dest(config.dist.css))
        .pipe(notify({ title: 'SCSS', message: 'Sass compiled successfully!' }))
}

const watch = () => {
    gulp.watch(config.src.js, js)
    gulp.watch(config.src.sass, css)
}

gulp.task('default', gulp.series(copyJs, gulp.parallel(css, js), watch))
gulp.task('build', gulp.series(copyJs, gulp.parallel(css, js)))
