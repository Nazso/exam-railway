const mongoose = require('mongoose');

const DieselSchema = new mongoose.Schema({
    id: Number,
    type: String,
    name: String,
    url: Array,
    manufacturer: String
}, {
    timesstamp: true
});

module.exports = mongoose.model('Diesel', DieselSchema);
