const db = require('../database');

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

module.exports = {
    getUnits,
    getUnit
}