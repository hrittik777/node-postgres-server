const routes = require('express').Router();
const handlers = require('../handlers');

routes.get('/get-units', handlers.units.getUnits);

routes.get('/get-unit/:unitId', handlers.units.getUnit);

routes.post('/create-unit', handlers.units.createUnit);

routes.put('/update-unit/:unitId', handlers.units.updateUnit);

routes.delete('/delete-unit/:unitId', handlers.units.deleteUnit);

module.exports = routes;