const path = require("path");

const { src, dest, series } = require("gulp");
const logger = require("gulp-logger");
const del = require("del");
const rename = require("gulp-rename");
const flatten = require("gulp-flatten");
const nodemon = require("gulp-nodemon");

const DIST_DIR = path.resolve("./dist");
const SRC_PATH = path.resolve("./**/*.md");
const MODULES_PATH = "!./**node_modules/**";

function cleanDist() {
  return del(DIST_DIR);
}

function buildDist() {
  let build = src([SRC_PATH, MODULES_PATH])
    .pipe(
      rename(function(path) {
        path.dirname === "."
          ? (path.basename = "node-init")
          : (path.basename = path.dirname);
      })
    )
    .pipe(flatten())
    .pipe(
      logger({
        before: "Starting Build...",
        after: "Build complete!",
        showChange: true
      })
    )
    .pipe(dest(DIST_DIR));

  return build;
}

function startServer(cb) {
  return nodemon({
    script: "./src/bin/www",
    ext: "js html css",
    env: { NODE_ENV: "development", PORT: 3000, DEBUG:"node-init:*"},
    debug: true,
    done: cb
  });
}

exports.clean = cleanDist;
exports.build = buildDist;
exports.start = startServer;
exports.default = series(cleanDist, buildDist, startServer);
