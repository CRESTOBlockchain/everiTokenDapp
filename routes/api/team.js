const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
// const validateTeamInput = require('../../validation/team');
// const validateExperienceInput = require('../../validation/experience');
// const validateEducationInput = require('../../validation/education');

// Load Team Model
const Team = require('../../models/Team');
// Load User Model
const User = require('../../models/User');

// @route   GET api/team/test
// @desc    Tests team route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Team Works' }));

// @route   GET api/team
// @desc    Get current users team
// @access  Private
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {};

        Team.findOne({ user: req.user.id })
            .populate('user', ['name', 'avatar'])
            .then(team => {
                if (!team) {
                    errors.noteam = 'There is no team for this user';
                    return res.status(404).json(errors);
                }
                res.json(team);
            })
            .catch(err => res.status(404).json(err));
    }
);

// @route   GET api/team/all
// @desc    Get all teams
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Team.find()
        .populate('user', ['name', 'avatar'])
        .then(teams => {
            if (!teams) {
                errors.noteam = 'There are no teams';
                return res.status(404).json(errors);
            }

            res.json(teams);
        })
        .catch(err => res.status(404).json({ team: 'There are no teams' }));
});

// @route   GET api/team/handle/:handle
// @desc    Get team by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
    const errors = {};

    Team.findOne({ handle: req.params.handle })
        .populate('user', ['name', 'avatar'])
        .then(team => {
            if (!team) {
                errors.noteam = 'There is no team for this user';
                res.status(404).json(errors);
            }

            res.json(team);
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/team/user/:user_id
// @desc    Get team by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
    const errors = {};

    Team.findOne({ user: req.params.user_id })
        .populate('user', ['name', 'avatar'])
        .then(team => {
            if (!team) {
                errors.noteam = 'There is no team for this user';
                res.status(404).json(errors);
            }

            res.json(team);
        })
        .catch(err =>
            res.status(404).json({ team: 'There is no team for this user' })
        );
});

// @route   POST api/team
// @desc    Create or edit user team
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTeamInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }

        // Get fields
        const teamFields = {};
        teamFields.user = req.user.id;
        if (req.body.handle) teamFields.handle = req.body.handle;
        if (req.body.company) teamFields.company = req.body.company;
        if (req.body.website) teamFields.website = req.body.website;
        if (req.body.location) teamFields.location = req.body.location;
        if (req.body.bio) teamFields.bio = req.body.bio;
        if (req.body.status) teamFields.status = req.body.status;
        if (req.body.githubusername)
            teamFields.githubusername = req.body.githubusername;
        // Skills - Spilt into array
        if (typeof req.body.skills !== 'undefined') {
            teamFields.skills = req.body.skills.split(',');
        }

        // Social
        teamFields.social = {};
        if (req.body.youtube) teamFields.social.youtube = req.body.youtube;
        if (req.body.twitter) teamFields.social.twitter = req.body.twitter;
        if (req.body.facebook) teamFields.social.facebook = req.body.facebook;
        if (req.body.linkedin) teamFields.social.linkedin = req.body.linkedin;
        if (req.body.instagram) teamFields.social.instagram = req.body.instagram;

        Team.findOne({ user: req.user.id }).then(team => {
            if (team) {
                // Update
                Team.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: teamFields },
                    { new: true }
                ).then(team => res.json(team));
            } else {
                // Create

                // Check if handle exists
                Team.findOne({ handle: teamFields.handle }).then(team => {
                    if (team) {
                        errors.handle = 'That handle already exists';
                        res.status(400).json(errors);
                    }

                    // Save Team
                    new Team(teamFields).save().then(team => res.json(team));
                });
            }
        });
    }
);

// @route   POST api/team/experience
// @desc    Add experience to team
// @access  Private
router.post(
    '/experience',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateExperienceInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }

        Team.findOne({ user: req.user.id }).then(team => {
            const newExp = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            };

            // Add to exp array
            team.experience.unshift(newExp);

            team.save().then(team => res.json(team));
        });
    }
);

// @route   POST api/team/education
// @desc    Add education to team
// @access  Private
router.post(
    '/education',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateEducationInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }

        Team.findOne({ user: req.user.id }).then(team => {
            const newEdu = {
                school: req.body.school,
                degree: req.body.degree,
                fieldofstudy: req.body.fieldofstudy,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            };

            // Add to exp array
            team.education.unshift(newEdu);

            team.save().then(team => res.json(team));
        });
    }
);

// @route   DELETE api/team/experience/:exp_id
// @desc    Delete experience from team
// @access  Private
router.delete(
    '/experience/:exp_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Team.findOne({ user: req.user.id })
            .then(team => {
                // Get remove index
                const removeIndex = team.experience
                    .map(item => item.id)
                    .indexOf(req.params.exp_id);

                // Splice out of array
                team.experience.splice(removeIndex, 1);

                // Save
                team.save().then(team => res.json(team));
            })
            .catch(err => res.status(404).json(err));
    }
);

// @route   DELETE api/team/education/:edu_id
// @desc    Delete education from team
// @access  Private
router.delete(
    '/education/:edu_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Team.findOne({ user: req.user.id })
            .then(team => {
                // Get remove index
                const removeIndex = team.education
                    .map(item => item.id)
                    .indexOf(req.params.edu_id);

                // Splice out of array
                team.education.splice(removeIndex, 1);

                // Save
                team.save().then(team => res.json(team));
            })
            .catch(err => res.status(404).json(err));
    }
);

// @route   DELETE api/team
// @desc    Delete user and team
// @access  Private
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Team.findOneAndRemove({ user: req.user.id }).then(() => {
            User.findOneAndRemove({ _id: req.user.id }).then(() =>
                res.json({ success: true })
            );
        });
    }
);

module.exports = router;
