const moment = require('moment');
const db = require('../database');
const { dateFormat } = require('../constants/format');

async function getUnits(args) {
    try {
        let data = [];

        if (args) {
            const { name } = args;

            if (name) {
                data = await db.getUnitsByName(name);
            }
        } else {
            data = await db.getUnits();
        }

        return data;
    } catch (error) {
        throw error;
    }
}

async function getUnit(args) {
    try {
        let data = [];

        if (args) {
            const { unitId } = args;

            if (unitId) {
                data = await db.getUnit(unitId);
            }
        }

        return data;
    } catch (error) {
        throw error;
    }
}

async function createUnit(args) {
    try {
        let data = [];

        if (args) {
            const { name, details, userId } = args;
            const updatedAt = moment().format(dateFormat);

            if (name, details, updatedAt, userId) {
                data = await db.createUnit(name, details, updatedAt, userId);
            }
        }

        return;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUnits,
    getUnit,
    createUnit
}