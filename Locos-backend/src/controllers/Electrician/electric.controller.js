const createError = require('http-errors');
const logger = require('../../config/logger');

const electricService = require('./electric.service');

exports.findAll = (req, res, next) => {
    return electricService.findAll()
        .then(loco => res.json(loco))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};


exports.findOne = (req, res, next) => {
    const id = req.params.id;

    return electricService.findOne(id)
        .then(loco => {
            if (!loco) return next(new createError.NotFound(`Locomotive with ${req.params.id} id not found!`))
            res.json(loco)})
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};
