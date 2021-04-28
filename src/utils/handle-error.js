const errors = require('../constants/errors');

function handleError(next, type, error) {
    let errorObj = errors[type];
    errorObj.message = error.message;
    next(error);
    return errorObj;
}

module.exports = handleError;