const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuario_schema = new Schema({
    usuario: String,
    clave: String,
    nombre: String,
    apellido: String,
}) 

const model = mongoose.model('Usuario', usuario_schema)
module.exports = model