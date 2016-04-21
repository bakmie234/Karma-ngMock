var gulp = require('gulp');

var Server = require('karma').Server;
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});
gulp.task('default', ['test']);

// //Deprecated, better use Karma directly
//   var karma = require('gulp-karma');
//   gulp.task('test', function () {
//       var testFiles = [

//           ];    
//       // Be sure to return the stream 
//       return gulp.src(testFiles)
//           .pipe(karma({
//               configFile: 'karma.conf.js',
//               action: 'watch'
//           }))
//           .on('error', function (err) {
//               // Make sure failed tests cause gulp to exit non-zero 
//               throw err;
//           });
//   });