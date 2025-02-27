const { customAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof customAPIError){
        res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({message: 'Something went wrong, Please try again later'})
}

module.exports = errorHandlerMiddleware