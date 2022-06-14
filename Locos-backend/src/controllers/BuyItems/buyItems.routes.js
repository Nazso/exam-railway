const express = require('express');
const router = express.Router();
const controller = require('./buyItems.controller');

router.post('/', (req, res, next) => {
    return controller.create(req, res, next)
});

router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
});

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next)
});

router.delete('/:id', (req, res, next) => {
    return controller.deleteOne(req, res, next)
});


module.exports = router;