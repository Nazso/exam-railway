const mongoose = require('mongoose');

const TokenModel = mongoose.Schema({
    token: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Token', TokenModel);