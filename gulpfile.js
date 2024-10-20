const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
// const imageminWebp = require('imagemin-webp');
const rename = require('gulp-rename');

gulp.task('img-min', async () => {
    const imagemin = (await import("gulp-imagemin")).default;
    const imageminWebp = (await import("imagemin-webp")).default;
    return gulp
        .src(['./**/*.{jpg,png}'], {encoding: false}, {base: './'})
        .pipe(await imagemin(
            [
                imageminWebp({
                    quality: 50
                })
            ]
        ))
        .pipe(rename({ extname: '.webp' }))
        .pipe(gulp.dest('./'));
});
