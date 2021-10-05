const moment = require('moment');
const db = require('../database');
const { dateFormat } = require('../constants/format');

/**
 * 
 * @param {*} args 
 * @returns 
 */
async function getUser(args) {
    try {
        let data = [];

        if (args) {
            const { userId } = args;

            if (userId) {
                data = await db.users.getUser(userId);
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
async function getUserUnits(args) {
    try {
        let data = [];

        if (args) {
            const { userId } = args;

            if (userId) {
                data = await db.users.getUserUnits(userId);
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
async function updateUser(args) {
    try {
        let data = [];

        if (args) {
            let { name, email, phone, username, password, userId } = args;

            if (userId) {
                data = await db.users.getUser(userId);
            }

            name = name || data[0].name;
            email = email || data[0].email;
            phone = phone || data[0].phone;
            username = username || data[0].username;
            password = password || data[0].password;
            userId = userId || parseInt(data[0].userId);

            if (name, email, phone, username, password, userId) {
                data = await db.users.updateUser(name, email, phone, username, password, userId);
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
async function deleteUser(args) {
    try {
        let data = [];

        if (args) {
            const { userId } = args;

            if (userId) {
                data = await db.users.deleteUser(userId);
            }
        }

        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUser,
    getUserUnits,
    updateUser,
    deleteUser
}