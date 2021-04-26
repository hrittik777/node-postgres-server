
const services = require('../services');

async function getUnits(request, response) {
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
        throw error;
    }
}

async function getUnit(request, response) {
    try {
        let data = [];
        let args = {};

        if (Object.keys(request.params).length > 0) {
            if (request.params.unitId) {
                args.unitId = request.params.unitId;
            }

            data = await services.getUnit(args);
        }

        return response.status(200).json(data);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUnits,
    getUnit
}