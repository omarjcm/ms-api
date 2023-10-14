const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pais_schema = new Schema({
    codigo: String,
    nombre: String
}) 

const model = mongoose.model('Pais', pais_schema)
module.exports = model