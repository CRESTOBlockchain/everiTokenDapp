const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OwnersPropertySchema = new Schema({
    handle: {
        type: String,
        required: true,
        max: 40
    },
    company: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    propertyvalue: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('ownersProperty', OwnersPropertySchema);
