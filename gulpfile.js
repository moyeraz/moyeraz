const gulp = require('gulp');
const rename = require('gulp-rename');
const changed = require('gulp-changed'); // ✅ Prevents reprocessing unchanged images

gulp.task('img-min', async () => {
    const imagemin = (await import("gulp-imagemin")).default;
    const imageminWebp = (await import("imagemin-webp")).default;
    const imageminAvif = (await import("imagemin-avif")).default;
    const mozjpeg = (await import("imagemin-mozjpeg")).default;
    const optipng = (await import("imagemin-optipng")).default;

    return gulp
        .src('public/**/*.{jpg,png}')
        .pipe(changed('public')) // ✅ Process only new/modified images
        .pipe(imagemin([
            mozjpeg({ quality: 80, progressive: true }), // ✅ Compress JPG
            optipng({ optimizationLevel: 5 }) // ✅ Compress PNG
        ]))
        .pipe(gulp.dest('public')) // ✅ Save compressed JPG/PNG

        // Generate WebP versions
        .pipe(imagemin([
            imageminWebp({ quality: 50 })
        ]))
        .pipe(rename({ extname: '.webp' }))
        .pipe(gulp.dest('public'))

        // Generate AVIF versions
        .pipe(imagemin([
            imageminAvif({ quality: 50 })
        ]))
        .pipe(rename({ extname: '.avif' }))
        .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('img-min'));