const logger = function (req, res, next) {
    console.log(`<${req.hostname}>: ${req.url}`);
    next();
};

module.exports = logger;
