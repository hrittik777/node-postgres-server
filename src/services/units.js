const moment = require('moment');
const db = require('../database');
const { dateFormat } = require('../constants/format');

/**
 * 
 * @param {*} args 
 * @returns 
 */
async function getUnits(args) {
    try {
        let data = [];

        if (args) {
            const { name } = args;

            if (name) {
                data = await db.units.getUnitsByName(name);
            }
        } else {
            data = await db.units.getUnits();
        }

        return data;
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {*} args 
 * @returns 
 */
async function getUnit(args) {
    try {
        let data = [];

        if (args) {
            const { unitId } = args;

            if (unitId) {
                data = await db.units.getUnit(unitId);
            }
        }

        return data;
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {*} args 
 * @returns 
 */
async function createUnit(args) {
    try {
        let data = [];

        if (args) {
            const { name, details, userId } = args;
            const updatedAt = moment().format(dateFormat);

            if (name, details, updatedAt, userId) {
                data = await db.units.createUnit(name, details, updatedAt, userId);
            }
        }

        return data[0];
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {*} args 
 * @returns 
 */
async function updateUnit(args) {
    try {
        let data = [];

        if (args) {
            let { name, details, userId, unitId } = args;
            const updatedAt = moment().format(dateFormat);

            if (unitId) {
                data = await db.units.getUnit(unitId);
            }

            name = name || data[0].name;
            details = details || data[0].details;
            userId = userId || parseInt(data[0].userId);

            if (name, details, updatedAt, userId, unitId) {
                data = await db.units.updateUnit(name, details, updatedAt, userId, unitId);
            }
        }

        return data[0];
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {*} args 
 * @returns 
 */
async function deleteUnit(args) {
    try {
        let data = [];

        if (args) {
            const { unitId } = args;

            if (unitId) {
                data = await db.units.deleteUnit(unitId);
            }
        }

        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUnits,
    getUnit,
    createUnit,
    updateUnit,
    deleteUnit
}