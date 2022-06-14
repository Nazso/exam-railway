const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    id: String,
    username: String,
    date: String,
    engine: String,
    type: String,
    usercomment: String
}, {
    timesstamp: true
});

module.exports = mongoose.model('Comment', CommentSchema);