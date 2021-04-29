
const routes = require('express').Router();
const handlers = require('../handlers');

routes.get('/', (request, response) => { response.status(200).json({ info: 'Hello World' }) });

/* UNITS */
routes.get('/units', handlers.getUnits);

routes.get('/unit/:unitId', handlers.getUnit);

routes.post('/unit', handlers.createUnit);

routes.put('/unit/:unitId', handlers.updateUnit);

routes.delete('/unit/:unitId', handlers.deleteUnit);

/* USERS */
routes.get('/user/:userId', handlers.getUser);

routes.get('/user/:userId/units', handlers.getUserUnits);

routes.put('/user/:userId', handlers.updateUser);

routes.delete('/user/:userId', handlers.deleteUser);

/* AUTH */
routes.post('/register');

routes.post('/confirm/:userId');

routes.post('/login');

routes.post('/logout');

module.exports = routes;