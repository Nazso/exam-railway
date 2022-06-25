const express = require('express');
const router = express.Router();
const controller = require('./diesel.controller');

const authenticationByJWT = require('../../auth/authenticate');

router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
});

router.get('/:id', authenticationByJWT, (req, res, next) => {
    return controller.findOne(req, res, next)
});


module.exports = router;
