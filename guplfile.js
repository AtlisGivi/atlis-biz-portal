gulp.task('es6-compile', function() {
    browserify({ debug: true })
        .transform(babelify.configure({ presets: ["es2015","react", "stage-0"] }))
        .require("src/index.js", { entry: true })
        .bundle()
        .pipe(gulp.dest('public/'));
});