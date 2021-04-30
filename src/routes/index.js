
const routes = require('express').Router();
const handlers = require('../handlers');

routes.get('/', (request, response) => { response.status(200).json({ info: 'Hello World' }) });

/* AUTH */
routes.post('/register');

routes.post('/confirm/:userId');

routes.post('/login');

routes.post('/logout');

/* UNITS */
routes.get('/units', handlers.units.getUnits);

routes.get('/unit/:unitId', handlers.units.getUnit);

routes.post('/unit', handlers.units.createUnit);

routes.put('/unit/:unitId', handlers.units.updateUnit);

routes.delete('/unit/:unitId', handlers.units.deleteUnit);

/* USERS */
routes.get('/user/:userId', handlers.users.getUser);

routes.get('/user/:userId/units', handlers.users.getUserUnits);

routes.put('/user/:userId', handlers.users.updateUser);

routes.delete('/user/:userId', handlers.users.deleteUser);

module.exports = routes;