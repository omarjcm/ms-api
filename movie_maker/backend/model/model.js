const mongoose = require('mongoose')

const movie_schema = new mongoose.Schema({
    name: String,
    genre: String,
    year: Number
})

module.exports = new mongoose.model('movie', movie_schema)