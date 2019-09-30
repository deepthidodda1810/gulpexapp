const gulp = require('gulp');
const deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src("./prod/**/*")
    .pipe(deploy({ 
      remoteUrl: "https://github.com/your_github_username_here/your_github_username_here.github.io.git",
      branch: "master"
    }))
});
gulp.task('message', function() {
  console.log("HTTP Server Started");
});