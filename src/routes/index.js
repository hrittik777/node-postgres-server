
const routes = require('express').Router();
const handlers = require('../handlers');

routes.get('/', (request, response) => { response.status(200).json({ info: 'Hello World' }) });

/* UNITS */
routes.get('/units', handlers.getUnits);

routes.get('/unit/:unitId', handlers.getUnit);

routes.post('/unit');

routes.put('/unit/:unitId');

routes.delete('/unit/:unitId');

/* USERS */
routes.get('/users');

routes.get('/user/:userId');

routes.get('/user/:userId/units');

routes.post('/user');

routes.put('/user/:userId');

routes.delete('/user/:userId');

module.exports = routes;