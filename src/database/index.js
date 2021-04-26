const pool = require('./pool');
const scripts = require('./scripts');

async function getUnitsByName(name) {
    return pool.query(scripts.getUnitsByName, [`%${name}%`]).then(data => data.rows);
}

async function getUnits() {
    return pool.query(scripts.getUnits).then(data => data.rows);
}

async function getUnit(unitId) {
    return pool.query(scripts.getUnit, [unitId]).then(data => data.rows);
}

module.exports = {
    getUnitsByName,
    getUnits,
    getUnit
}