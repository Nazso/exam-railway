const mongoose = require('mongoose');

const ElectricSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    wheelArrangement: {
        type: String,
        required: true
    },
    numberOfAxels: {
        type: Number,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    topSpeed: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    typeOfElectricity: {
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    }
}, {
    timesstamp: true
});

module.exports = mongoose.model('Electric', ElectricSchema);
