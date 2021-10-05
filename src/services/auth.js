const moment = require('moment');
const db = require('../database');
const bcrypt = require('bcrypt');
const salt = 10;

async function register(args) {
    try {
        let data = [];

        if (args) {
            const { name, email, phone, username, password } = args;

            if (name && email && phone && username && password) {
                const hashedPassword = await bcrypt.hash(password, salt);
                await db.auth.register(name, email, phone, username, hashedPassword);
            }
        }

        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    register
}