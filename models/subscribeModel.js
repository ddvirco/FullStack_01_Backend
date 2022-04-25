const mongoose = require('mongoose');

let SubscribeSchema = new mongoose.Schema({
    memberId: String,
    memberName: String, 
    movies : { movieId: String, date: String}
        
},{ versionKey: false});

module.exports = mongoose.model('subscribe', SubscribeSchema)