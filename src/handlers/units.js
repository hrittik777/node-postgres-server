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

            data = await services.units.getUnits(args);
        } else {
            data = await services.units.getUnits();
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

            data = await services.units.getUnit(args);
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
            data = await services.units.createUnit(args);
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

            data = await services.units.updateUnit(args);
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

            data = await services.units.deleteUnit(args);
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