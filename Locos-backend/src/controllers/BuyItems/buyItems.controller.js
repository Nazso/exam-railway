const createError = require('http-errors');
const logger = require('../../config/logger');

const buyItemService = require('./buyItems.service');
const buyItem = require('../../model/buyItems.model');

exports.create = (req, res, next) => {
    const newItem = {
        username: req.body['username'],
        type: req.body['type'],
        little: req.body['littleModel'],
        middle: req.body['middleModel'],
        big: req.body['bigModel'],
        price: req.body['price']
    };

    return buyItemService.create(newItem)
        .then(item => {
            res.status(201)
            res.json(newItem)
        })
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};

exports.findAll = (req, res, next) => {
    return buyItemService.findAll()
        .then(item => res.json(item))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};


exports.findOne = (req, res, next) => {
    const id = req.params.id;

    return buyItemService.findOne(id)
        .then(item => {
            if (!item) return next(new createError.NotFound(`Item with ${req.params.id} id not found!`))
            res.json(item)})
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};

exports.deleteOne = (req, res, next) => {
    const id = req.params.id;

    return buyItemService.deleteOne(id)
        .then(item => res.json({}))
        .catch((err) => {
            logger.error(err)
            return next(new createError.NotFound(`${req.params.id} id is not found!`))
        })
}