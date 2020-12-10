const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
