const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: '/images/avatar-default.png',
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'artist'],
        required: true
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artwork'
    }],
    buyed: {
        type: [String],
    },
    sold: {
        type: [String],
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;


