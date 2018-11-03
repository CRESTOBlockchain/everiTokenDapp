const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for admin to create and edit team members from the web
const TeamSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },

    linkedinURL: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('team', TeamSchema);
