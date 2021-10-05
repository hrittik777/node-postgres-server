const services = require('../services');
const handleError = require('../utils/handle-error');
const { isEmpty } = require('../utils/common');

async function register(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.body)) {
            args = request.body;
            data = await services.auth.register(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

module.exports = {
    register
}