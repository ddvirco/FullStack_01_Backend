const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    permission: [String]
},{ versionKey: false});

module.exports = mongoose.model('users', UserSchema)

