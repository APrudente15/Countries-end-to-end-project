const logger = (req,res,next) => {
    console.log(req.method, req.originalUrl);

    next();
}

//next() --> function that calls the next middleware
module.exports = logger;