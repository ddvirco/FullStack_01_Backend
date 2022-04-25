const mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
    name: String,
    genres: Array,
    // genres: [String] another option
    image: String,
    premiered: String
},{ versionKey: false});

module.exports = mongoose.model('movies', MovieSchema);