const express = require('express');
const router = express.Router();
const controller = require('./buyItems.controller');

const authenticationByJWT = require('../../auth/authenticate');
const adminRoleHandler = require('../../auth/adminOnly');

router.post('/', (req, res, next) => {
    return controller.create(req, res, next)
});

router.get('/', adminRoleHandler, (req, res, next) => {
    return controller.findAll(req, res, next)
});

router.get('/:id', adminRoleHandler, (req, res, next) => {
    return controller.findOne(req, res, next)
});

module.exports = router;
