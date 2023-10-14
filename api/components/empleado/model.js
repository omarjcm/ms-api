const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const empleado_schema = new Schema({
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    usuario: req_string,
    clave: req_string
})

const model = mongoose.model('empleado', empleado_schema)
module.exports = model
