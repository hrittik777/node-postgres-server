const routes = require('express').Router();
const handlers = require('../handlers');

routes.get('/get-user/:userId', handlers.users.getUser);

routes.get('/get-user-units/:userId/units', handlers.users.getUserUnits);

routes.put('/update-user/:userId', handlers.users.updateUser);

routes.delete('/delete-user/:userId', handlers.users.deleteUser);

module.exports = routes;