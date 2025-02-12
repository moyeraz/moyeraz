const gulp = require("gulp");
const rename = require("gulp-rename");

gulp.task("img-optimize", async () => {
    const imagemin = (await import("gulp-imagemin")).default;

    return gulp.src("public/**/*.{jpg,png}")
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 75, progressive: true }), // Compress JPG
            imagemin.optipng({ optimizationLevel: 5 }) // Compress PNG
        ]))
        .pipe(gulp.dest("public/optimized/")); // Save optimized images
});

gulp.task("convert-webp", async () => {
    const imagemin = (await import("gulp-imagemin")).default;
    const imageminWebp = (await import("imagemin-webp")).default;

    return gulp.src("public/**/*.{jpg,png}")
        .pipe(imagemin([
            imageminWebp({ quality: 50 }) // Convert to WebP with compression
        ]))
        .pipe(rename({ extname: ".webp" }))
        .pipe(gulp.dest("public/webp/")); // Save WebP images separately
});

// Run both tasks
gulp.task("default", gulp.series("img-optimize", "convert-webp"));
