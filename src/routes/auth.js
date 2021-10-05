const routes = require('express').Router();
const handlers = require('../handlers');

routes.post('/register-user', handlers.auth.register);

routes.post('/confirm-user/:userId');

routes.post('/login');

routes.post('/logout');

module.exports = routes;