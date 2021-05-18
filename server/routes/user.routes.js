const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const uploader = require('../configs/cloudinary.config');

const User = require('./../models/user.model');
const Artworks = require('./../models/artwork.model');

// Endpoints

// Update profile
router.put('/editProfile/:user_id', uploader.single('avatar'), (req, res) => {
    const user = req.params.user_id;
    const { firstName, lastName, username, email, password, role } = req.body;
    const img = req.file ? req.file.url : req.body.avatar;

    if (!mongoose.Types.ObjectId.isValid(user)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User
        .findByIdAndUpdate(user, { firstName, lastName, username, email, password, role, avatar: img }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
});

// Get all user artworks 
router.get('/allUserArtworks/:user_id', (req, res) => {
    const user = req.params.user_id;

    if (!mongoose.Types.ObjectId.isValid(user)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Artworks
        .find({ owner: user })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
});

// Get buyed artworks
router.get('/buyedArtworks/:user_id', (req, res) => {
    const userId = req.params.user_id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User
        .findById(userId, { buyed: 1 })
        .populate('buyed')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
});

// Get available artworks to sell (only artists)
router.get('/onSellArtworks/:user_id', (req, res) => {
    const userId = req.params.user_id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Artworks
        .find({ owner: userId, available: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
});

// Get sold artworks (only artists)
router.get('/soldArtworks/:user_id', (req, res) => {
    const userId = req.params.user_id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Artworks
        .find({ owner: userId, available: false })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
});

// Get user cart info
router.get('/cart/:user_id', (req, res) => {
    const userId = req.params.user_id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User
        .findById(userId, {cart: 1})
        .populate('cart')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
});

// Add item to user cart
router.put('/addToCart/:user_id/:artwork_id', (req, res) => {
    const userId = req.params.user_id;
    const userCart = req.user.cart;
    const cartItem = req.params.artwork_id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    if (!userCart.includes(cartItem)) {
        User
            .findByIdAndUpdate(userId, { $addToSet: { cart: cartItem } }, { new: true })
            .then(response => res.json(response))
            .catch(err => res.status(500).json(err))

    } else {
        res.status(400).json({ message: 'Item already added' });
        return;
    }
});

// Delete item to user cart
router.put('/deleteFromCart/:user_id/:artwork_id', (req, res) => {
    const userId = req.params.user_id;
    const userCart = req.user.cart;
    const cartItem = req.params.artwork_id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    if (userCart.includes(cartItem)) {
        User
            .findByIdAndUpdate(userId, { $pull: { cart: cartItem } }, { new: true })
            .then(response => res.json(response))
            .catch(err => res.status(500).json(err))
    } else {
        res.status(400).json({ message: 'Item not found' });
        return;
    }
});

// Update buyed artworks
router.put('/updateBuyedArtworks/:user_id/:artwork_id', (req, res) => {
    const user = req.params.user_id;
    const artwork = req.params.artwork_id;
    const removeItems = [];

    if (!mongoose.Types.ObjectId.isValid(user)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User
        .findByIdAndUpdate(user, { $push: { buyed: artwork }, cart: removeItems }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err));
});

module.exports = router;