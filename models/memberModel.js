const mongoose = require('mongoose');

let MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
},{ versionKey: false});

module.exports = mongoose.model('members', MemberSchema)

// module.exports = mongoose.model('members1', MemberSchema)