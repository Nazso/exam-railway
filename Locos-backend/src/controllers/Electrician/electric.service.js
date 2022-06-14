const Electric = require('../../model/electric.model');

exports.findAll = () => Electric.find();

exports.findOne = (id) => Electric.findById(id);
