const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
	return gulp
	// 1. Get SCSS files
	.src('./scss/**/*.scss')
	.pipe(sourcemaps.init())
	// 2. Compile
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	// 3. Autoprefixer
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 2 versions', '> 1%', 'ie 11']
	}))
	// 4. Generate sourcemaps
	.pipe(sourcemaps.write('./maps'))
	// 5. Export to CSS folder
	.pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
	gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});