# Empty gulp pipe

Replacement for any gulp task that you want to disable

## Usage

Use it as a common gulp task.

eg. Do not uglify of an environment variable is set

```
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

if (process.env.NO_COMPRESS) {
    uglify = require("gulp-empty-pipe");
}

gulp.task("js", () => gulp.src("js/*")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js")));
```