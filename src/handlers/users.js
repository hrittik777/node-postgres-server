const services = require('../services');
const handleError = require('../utils/handle-error');
const { isEmpty } = require('../utils/common');

async function getUser(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.params)) {
            if (request.params.userId) {
                args.userId = parseInt(request.params.userId);
            }

            data = await services.users.getUser(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function getUserUnits(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.params)) {
            if (request.params.userId) {
                args.userId = parseInt(request.params.userId);
            }

            data = await services.users.getUserUnits(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function updateUser(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.body) && !isEmpty(request.params)) {
            args = request.body;

            if (request.params.userId) {
                args.userId = parseInt(request.params.userId);
            }

            data = await services.users.updateUser(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function deleteUser(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.params)) {
            if (request.params.userId) {
                args.userId = parseInt(request.params.userId);
            }

            data = await services.users.deleteUser(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

module.exports = {
    getUser,
    getUserUnits,
    updateUser,
    deleteUser
}