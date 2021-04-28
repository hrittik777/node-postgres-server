
const services = require('../services');
const handleError = require('../utils/handle-error');

async function getUnits(request, response, next) {
    try {
        let data = [];
        let args = {};

        if (Object.keys(request.query).length > 0) {
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

        if (Object.keys(request.params).length > 0) {
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

        if (Object.keys(request.body).length > 0) {
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

        if (Object.keys(request.body).length > 0 && Object.keys(request.params).length > 0) {
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

        if (Object.keys(request.params).length > 0) {
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

module.exports = {
    getUnits,
    getUnit,
    createUnit,
    updateUnit,
    deleteUnit
}