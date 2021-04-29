const pool = require('./pool');
const scripts = require('./scripts');

/* UNITS */
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

/* USERS */
async function getUser(userId) {
    return pool.query(scripts.getUser, [userId]).then(data => data.rows);
}

async function getUserUnits(userId) {
    return pool.query(scripts.getUserUnits, [userId]).then(data => data.rows);
}

async function updateUser(name, email, phone, username, password, userId) {
    return pool.query(scripts.updateUser, [name, email, phone, username, password, userId]).then(data => data.rows);
}

async function deleteUser(userId) {
    return pool.query(scripts.deleteUser, [userId]).then(data => data.rows);
}

module.exports = {
    getUnitsByName,
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