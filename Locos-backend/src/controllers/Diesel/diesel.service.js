const Diesel = require('../../model/diesel.model');

exports.findAll = () => Diesel.find();

exports.findOne = (id) => Diesel.findById(id);
