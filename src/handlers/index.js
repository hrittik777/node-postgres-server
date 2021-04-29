
const services = require('../services');
const handleError = require('../utils/handle-error');
const { isEmpty } = require('../utils/common');

async function getUnits(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.query)) {
            if (request.query.name) {
                args.name = request.query.name;
            }

            data = await services.getUnits(args);
        } else {
            data = await services.getUnits();
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function getUnit(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.params)) {
            if (request.params.unitId) {
                args.unitId = parseInt(request.params.unitId);
            }

            data = await services.getUnit(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function createUnit(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.body)) {
            args = request.body;
            data = await services.createUnit(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function updateUnit(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.body) && !isEmpty(request.params)) {
            args = request.body;

            if (request.params.unitId) {
                args.unitId = parseInt(request.params.unitId);
            }

            data = await services.updateUnit(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function deleteUnit(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.params)) {
            if (request.params.unitId) {
                args.unitId = parseInt(request.params.unitId);
            }

            data = await services.deleteUnit(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

async function getUser(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (!isEmpty(request.params)) {
            if (request.params.userId) {
                args.userId = parseInt(request.params.userId);
            }

            data = await services.getUser(args);
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

            data = await services.getUserUnits(args);
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

            data = await services.updateUser(args);
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

            data = await services.deleteUser(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(handleError(next, 'badRequest', error));
    }
}

module.exports = {
    getUnits,
    getUnit,
    createUnit,
    updateUnit,
    deleteUnit,
    getUser,
    getUserUnits,
    updateUser,
    deleteUser
}