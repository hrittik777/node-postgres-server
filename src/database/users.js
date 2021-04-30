const pool = require('./pool');
const scripts = require('./scripts');

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
    getUser,
    getUserUnits,
    updateUser,
    deleteUser
}