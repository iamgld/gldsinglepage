import gulp from 'gulp'
import babel from 'gulp-babel'
import pug from 'gulp-pug'
import sass from 'gulp-sass'
import cssnano from 'cssnano'
import browserSync from 'browser-sync'
import postcss from 'gulp-postcss'

const server = browserSync.create()
const sassOptions = {
	// outputStyle: 'nested'
	// includePaths: ["node-modules"]
}
const postCSSPluging = [
	cssnano({
		autoprefixer: {
			add: false,
			browsers: ["last 10 versions", "ie >= 9"]
		}
	}),
]

gulp.task('es6', () => {
	gulp.src('./dev/js/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./public/js'))
})

gulp.task('sass', () => {
	gulp.src('./dev/scss/*.scss')
		.pipe(sass(sassOptions))
		.pipe(postcss(postCSSPluging))
		.pipe(gulp.dest('./public/css'))
		.pipe(server.stream({match: '**/*.css'}))
})

gulp.task('pug', () => {
	gulp.src('./dev/pug/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./public'))
})

gulp.task('default', () => {
	server.init({
		server: {
			baseDir: './public'
		}
	})

	gulp.watch('./dev/js/**/*.js', ['es6', server.reload])
	gulp.watch('./dev/pug/**/*.pug', ['pug', server.reload])
	gulp.watch('./dev/scss/**/*.scss', ['sass'])

})
