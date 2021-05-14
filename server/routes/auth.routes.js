const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../models/user.model');

router.post('/signup', (req, res) => {

    const { username, password, avatar, email, firstName, lastName, role } = req.body;
    
    if (!username || !password || !email || !firstName || !lastName || !role) {
        res.status(400).json({ message: 'All fields required' });
        return;
    }

    if (password.length < 5) {
        res.status(400).json({ message: 'Password must be at least 5 characters' });
        return;
    }

    User.findOne({ username }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: 'User not found' });
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'User not available' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new User({ username, password: hashPass, avatar, email, firstName, lastName, role });

        aNewUser.save(err => {
            if (err) {
                res.status(500).json({ message: 'Signup Error' });
                return;
            }

            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login Error' });
                    return;
                }

                res.status(200).json(aNewUser);
            });
        });
    });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Authentication Error' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session Error' });
                return;
            }
            res.status(200).json(theUser);
        });
    })(req, res, next)
});

router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Session closed!' });
});

router.get('/loggedin', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'No authorized' });
});

module.exports = router;