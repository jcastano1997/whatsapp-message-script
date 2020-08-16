const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const minifycss = require('gulp-minify-css');
const postcss = require('gulp-postcss');

// Compile css into CSS & auto-inject into browsers
gulp.task('css', gulp.parallel(function() {
    return gulp.src("css/*.css")
        .pipe(postcss([
            require('tailwindcss'),
            require('autoprefixer')
        ]))
        .pipe(minifycss())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
}));

// process JS files and return the stream.
gulp.task('js', gulp.parallel(function () {
    return gulp.src('js/whatsapp-message-script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}));

gulp.task('default', gulp.parallel(function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("css/*.css", gulp.series(['css']));
    gulp.watch("js/*js", gulp.series(['js']));
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
}));