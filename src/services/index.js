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
                data = await db.getUnit(unitId);
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
                data = await db.createUnit(name, details, updatedAt, userId);
            }
        }

        return;
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
                data = await db.getUnit(unitId);
            }

            name = name || data[0].name;
            details = details || data[0].details;
            userId = userId || parseInt(data[0].userId);

            if (name, details, updatedAt, userId, unitId) {
                data = await db.updateUnit(name, details, updatedAt, userId, unitId);
            }
        }

        return true;
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
                data = await db.deleteUnit(unitId);
            }
        }

        return true;
    } catch (error) {
        throw error;
    }
}

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
                data = await db.getUser(userId);
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
                data = await db.getUserUnits(userId);
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
                data = await db.getUser(userId);
            }

            name = name || data[0].name;
            email = email || data[0].email;
            phone = phone || data[0].phone;
            username = username || data[0].username;
            password = password || data[0].password;
            userId = userId || parseInt(data[0].userId);

            if (name, email, phone, username, password, userId) {
                data = await db.updateUser(name, email, phone, username, password, userId);
            }
        }

        return true;
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
                data = await db.deleteUser(userId);
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
    deleteUnit,
    getUser,
    getUserUnits,
    updateUser,
    deleteUser
}