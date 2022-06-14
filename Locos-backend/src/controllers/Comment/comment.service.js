const Comment = require('../../model/comment.model');

exports.create = (commentData) => {
    const comment = new Comment(commentData);
    return comment.save();
}

exports.findAll = () => Comment.find();

exports.findOne = (id) => Comment.findById(id);

exports.deleteOne = (id) => Comment.findByIdAndDelete(id);
