const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: 'not found',
        message: err.message,
        stackTrace: err.stack
      })
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        title: 'Validation failed',
        message: err.message,
        stackTrace: err.stack
      })
      break;
    case constants.FORBIDDEN:
      res.json({
        title: 'forbidden action',
        message: err.message,
        stackTrace: err.stack
      })
      break;
    case constants.UNAUTHORISED:
      res.json({
        title: 'needs authorisation',
        message: err.message,
        stackTrace: err.stack
      })
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: 'server error',
        message: err.message,
        stackTrace: err.stack
      })
      break;
    default:
      console.log('No error we are good.');
      break;
  }

}

module.exports = errorHandler