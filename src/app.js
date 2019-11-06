const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const markdownIt = require("markdown-it");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/docs/:id", (req, res) => {
  let menuItems = app.get("MENU_ITEMS");
  console.log(path.resolve(`./dist/${menuItems[req.params.id].path}`));
  fs.readFile(
    path.resolve(`./dist/${menuItems[req.params.id].path}`),
    (err, data) => {
      if (err) {
        createError(err);
      } else {
        const md = new markdownIt();
        let file = data.toString();
        res.status(200).send(md.render(file));
      }
    }
  );
});

app.use("/docs", (req, res) => {
  console.log(path.resolve("./dist"));
  fs.readdir(path.resolve("./dist"), (err, files) => {
    if (err) {
      throw createError(err);
    } else {
      let menuItems = [];
      for (let file of files) {
        menuItems.push({ id: files.indexOf(file), path: file });
      }
      app.set("MENU_ITEMS", null);
      app.set("MENU_ITEMS", menuItems);
      res.send(app.get("MENU_ITEMS"));
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
