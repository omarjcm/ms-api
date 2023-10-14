const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const req_number = {
    type: Number,
    required: true,
}

const producto_schema = new Schema({
    codigo: req_string,
    nombre: req_string,
    valor: req_number,
})

const model = mongoose.model('producto', producto_schema)
module.exports = model