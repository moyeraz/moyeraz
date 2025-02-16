const gulp = require('gulp');
const rename = require('gulp-rename');
const newer = require('gulp-newer'); // ✅ Replacement for gulp-changed

gulp.task('img-min', async () => {
    const imagemin = (await import("gulp-imagemin")).default;
    const imageminWebp = (await import("imagemin-webp")).default;
    const imageminAvif = (await import("imagemin-avif")).default;
    const mozjpeg = (await import("imagemin-mozjpeg")).default;
    const optipng = (await import("imagemin-optipng")).default;

    return gulp
        .src('public/**/*.{jpg,png}')
        .pipe(newer('public')) // ✅ Now using gulp-newer instead of gulp-changed
        .pipe(imagemin([
            mozjpeg({ quality: 80, progressive: true }),
            optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest('public')) // ✅ Save optimized JPG/PNG

        // Generate WebP versions
        .pipe(imagemin([imageminWebp({ quality: 50 })]))
        .pipe(rename({ extname: '.webp' }))
        .pipe(gulp.dest('public'))

        // Generate AVIF versions
        .pipe(imagemin([imageminAvif({ quality: 50 })]))
        .pipe(rename({ extname: '.avif' }))
        .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('img-min'));