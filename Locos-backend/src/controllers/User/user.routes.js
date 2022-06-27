const express = require('express');
const routes = express.Router();

const userController = require('./user.controller');

const authenticationByJWT = require('../../auth/authenticate');
const adminRoleHandler = require('../../auth/adminOnly');

routes.post('/', (req, res, next) => {
    return userController.createNewUser(req, res, next);
});

routes.get('/', authenticationByJWT, adminRoleHandler, (req, res, next) => {
    return userController.getAllUsers(req, res, next);
});

module.exports = routes;
