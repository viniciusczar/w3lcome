const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/users', UserController.create);
routes.get('/users', UserController.listener);
routes.get('/users/:name', UserController.show);
routes.put('/users', UserController.updated);
routes.delete('/users/:name', UserController.deleted);

module.exports = routes;