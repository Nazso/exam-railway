const User = require('../../model/user.model');


exports.create = (user) => {
    const newUser = new User(user);
    return newUser.save();
}

exports.findAll = () => User.find();

exports.findById = (id) => User.findById(id);

exports.update = (userId, updatedUser) => User.findByIdAndUpdate(userId, updatedUser, { new: false });

exports.delete = (id) => User.findByIdAndRemove(id);