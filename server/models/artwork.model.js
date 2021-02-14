const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    materials: {
        type: String,
        lowercase: true,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tags: {
        type: String,
        enum: ['Painting', 'Sculpture', 'Drawing', 'Crafts', 'Photography', 'Other'],
        default: 'Other'
    },
    artist: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Artwork = mongoose.model('Artwork', artworkSchema);
module.exports = Artwork;