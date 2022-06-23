const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    username: {type: String},
    date: {type: String},
    engine: {type: String},
    type: {type: String},
    name: {type: String},
    usercomment: {type: String}
}, {
    timesstamp: true
});

module.exports = mongoose.model('Comment', CommentSchema);