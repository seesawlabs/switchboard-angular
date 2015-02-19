var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	runSequence = require('run-sequence');

gulp.task('nodemon', function () {
	return plugins.nodemon({
		script: 'server.js',
		nodeArgs: ['--debug'],
		ext: 'js,html',
		watch: './**/*'
	});
});

gulp.task('watch', function() {
	plugins.livereload.listen();

	gulp.watch('./**.*').on('change', plugins.livereload.changed);
});

gulp.task('default', function() {
	runSequence(['nodemon', 'watch']);
});