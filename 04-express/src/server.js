const express = require("express");
const loggerMiddleware = require("./utils/logger");
const app = express();

app.use(loggerMiddleware);

app.use("/", (req, res)=> {
    res.status(200).send("Hello World!!!")
});

module.exports = app;
