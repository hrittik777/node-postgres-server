const pool = require('./config/pool');
const scripts = require('./scripts');

async function register(name, email, phone, username, hashedPassword) {
    return pool.query(scripts.register, [name, email, phone, username, hashedPassword]).then(data => data.rows);
}

module.exports = {
    register
}