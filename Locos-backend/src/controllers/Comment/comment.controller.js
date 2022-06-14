const createError = require('http-errors');
const logger = require('../../config/logger');

const commentService = require('./comment.service');
const Comment = require('../../model/comment.model');

exports.create = (req, res, next) => {
    const newComment = {
        username: req.body['username'],
        date: req.body['date'],
        engine: req.body['engine'],
        type: req.body['type'],
        usercomment: req.body['usercomment']
    };

    return commentService.create(newComment)
        .then(comment => {
            res.status(201)
            res.json(newComment)
        })
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};

exports.findAll = (req, res, next) => {
    return commentService.findAll()
        .then(comment => res.json(comment))
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};


exports.findOne = (req, res, next) => {
    const id = req.params.id;

    return commentService.findOne(id)
        .then(comment => {
            if (!comment) return next(new createError.NotFound(`Comment with ${req.params.id} id not found!`))
            res.json(comment)})
        .catch((err) => {
            logger.error(err);
            return next(new createError.InternalServerError(err));
        })
};

exports.deleteOne = (req, res, next) => {
    const id = req.params.id;

    return commentService.deleteOne(id)
        .then(comment => res.json({}))
        .catch((err) => {
            logger.error(err)
            return next(new createError.NotFound(`${req.params.id} id is not found!`))
        })
};