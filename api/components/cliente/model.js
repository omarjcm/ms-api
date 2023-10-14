const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const cliente_schema = new Schema({
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    ciudad: {
        type: Schema.ObjectId,
        ref: 'ciudad',
    },
})

const model = mongoose.model('cliente', cliente_schema)
module.exports = model