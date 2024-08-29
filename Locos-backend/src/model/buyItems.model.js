const mongoose = require('mongoose');

const BuyItemSchema = new mongoose.Schema({
    // id: String,
    username: String,
    type: String,
    little: Number,
    middle: Number,
    big: Number,
    price: Number
}, {
    timesstamp: true
});

module.exports = mongoose.model('BuyItem', BuyItemSchema);
