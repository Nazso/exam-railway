const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
}, {
    timestamps: true
});

UserSchema.plugin(idValidator);

module.exports = mongoose.model('User', UserSchema);
