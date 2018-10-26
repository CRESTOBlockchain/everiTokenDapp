const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// we will add a json web token module we will use it to access a protected route
// then we will use passport module to validate the token

// so with the router we user router.get but in the server we use app.get
// Its best to describe what each route does and the location


// ------- How to use GET ----------

// @route         GET api/user/test
// @description   Tests User route
// @access        Public

router.get('/test', (request, response) =>
    response.json({msg: "Welcome to the User page"}));


// ------- How to use Post ----------
// First we need to get out models that we create for the user
const User = require('../../models/User.js');


// @route         GET api/user/register
// @description   register a User
// @access        Public
router.post('/register', (request, response) => {
    const { errors, isValid } = validateRegisterInput(request.body);

    // Check Validation
    if (!isValid) {
        return response.status(400).json(errors);
    }
    User.findOne({ email: request.body.email})
        .then(user => {
            if (user === true){
                errors.email = 'Email already exists';
                return response.status(400).json(errors);
            }else{
                const avatar = gravatar.url(request.body.email, {
                    s: '200',  // Size
                    r: 'pg',  // Rating
                    d: 'mm', // Default
                });

                const newUser = new User({
                    name: request.body.name,
                    email: request.body.email,
                    avatar,
                    password: request.body.password,
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err === true) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => response.json(user))
                            .catch(err => console.log(err))
                    })
                })

            }
        })
});


// We need to require the key from the config folder
const keys = require('../../config/keys');

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check for user
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User Matched
                const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

                // Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                );
            } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors);
            }
        });
    });
});


// @route         GET api/user/current
// @description   return current user
// @access        Private
router.get('/current', passport.authenticate('jwt',
    {session: false }),
    (request, response) => {
        response.json({
            id: request.user.id,
            name: request.user.name,
            email: request.user.email
        })
    });


module.exports = router;
