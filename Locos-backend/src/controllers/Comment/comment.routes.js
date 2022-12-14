const express = require('express');
const router = express.Router();
const controller = require('./comment.controller');

const authenticationByJWT = require('../../auth/authenticate');
const adminRoleHandler = require('../../auth/adminOnly');

router.post('/',  (req, res, next) => {
    return controller.create(req, res, next)
});

// router.get('/', authenticationByJWT, (req, res, next) => {
//     return controller.findAll(req, res, next)
// });

router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
});

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next)
});

router.delete('/:id', adminRoleHandler, (req, res, next) => {
    return controller.deleteOne(req, res, next)
});

module.exports = router;
