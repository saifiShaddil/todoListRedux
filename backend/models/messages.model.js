const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const messagesSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
        trim: true
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const messages = mongoose.model('messages', messagesSchema);

module.exports = messages;