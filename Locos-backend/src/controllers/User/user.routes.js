const express = require('express');
const routes = express.Router();

const userController = require('./user.controller');

const authenticationByJWT = require('../../auth/authenticate');
const adminRoleHandler = require('../../auth/adminOnly');

routes.post('/', (req, res, next) => {
    return userController.createNewUser(req, res, next);
});

routes.get('/', (req, res, next) => {
    return userController.getAllUsers(req, res, next);
});

routes.get('/:id', (req, res, next) => {
    return userController.getUserById(req, res, next);
});

routes.put('/:id', authenticationByJWT, (req, res, next) => {
    return userController.updateUser(req, res, next);
});

routes.delete('/:id', authenticationByJWT, (req, res, next) => {
    return userController.deleteUser(req, res, next);
});

module.exports = routes;
