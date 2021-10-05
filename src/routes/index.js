const routes = require('express').Router();
const authRoutes = require('./auth');
const unitRoutes = require('./units');
const userRoutes = require('./users');

routes.use('/auth', authRoutes);

routes.use('/units', unitRoutes);

routes.use('/users', userRoutes);

module.exports = routes;