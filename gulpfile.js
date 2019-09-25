var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sourceSCSS = 'styles/sass/main.scss',
    destCSS = 'styles/css/';

gulp.task('css:compile', function(){
    gulp.src(sourceSCSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destCSS));
});
