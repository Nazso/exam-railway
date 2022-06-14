const express = require('express');
const router = express.Router();
const controller = require('./diesel.controller');

router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
});

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next)
});


module.exports = router;
