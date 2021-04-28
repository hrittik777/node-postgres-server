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

async function createUnit(name, details, updatedAt, userId) {
    return pool.query(scripts.createUnit, [name, details, updatedAt, userId]).then(data => data.rows);
}

async function updateUnit(name, details, updatedAt, userId, unitId) {
    return pool.query(scripts.updateUnit, [name, details, updatedAt, userId, unitId]).then(data => data.rows);
}

async function deleteUnit(unitId) {
    return pool.query(scripts.deleteUnit, [unitId]).then(data => data.rows);
}

module.exports = {
    getUnitsByName,
    getUnits,
    getUnit,
    createUnit,
    updateUnit,
    deleteUnit
}