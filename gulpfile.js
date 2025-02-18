const gulp = require('gulp');
const rename = require('gulp-rename');
const newer = require('gulp-newer'); // ✅ Replacement for gulp-changed
const imagemin = require("gulp-imagemin");
const imageminWebp = require("imagemin-webp");
const imageminAvif = require("imagemin-avif");
const mozjpeg = require("imagemin-mozjpeg");
const optipng = require("imagemin-optipng");

// ✅ Optimize JPG & PNG Files
gulp.task('img-min', () => {
    return gulp.src('public/**/*.{jpg,png}')
        .pipe(newer('public/optimized')) // ✅ Only process new images
        .pipe(imagemin([
            mozjpeg({ quality: 80, progressive: true }),
            optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest('public/optimized')); // ✅ Save optimized JPG/PNG
});

// ✅ Generate WebP Versions
gulp.task('webp', () => {
    return gulp.src('public/**/*.{jpg,png}')
        .pipe(newer({ dest: 'public/optimized', ext: '.webp' })) // ✅ Process only new files
        .pipe(imagemin([imageminWebp({ quality: 50 })]))
        .pipe(rename({ extname: '.webp' }))
        .pipe(gulp.dest('public/optimized')); // ✅ Save WebP versions
});

// ✅ Generate AVIF Versions
gulp.task('avif', () => {
    return gulp.src('public/**/*.{jpg,png}')
        .pipe(newer({ dest: 'public/optimized', ext: '.avif' })) // ✅ Process only new files
        .pipe(imagemin([imageminAvif({ quality: 50 })]))
        .pipe(rename({ extname: '.avif' }))
        .pipe(gulp.dest('public/optimized')); // ✅ Save AVIF versions
});

// ✅ Define Default Gulp Task (Runs All)
gulp.task('default', gulp.series('img-min', 'webp', 'avif'));
