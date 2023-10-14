const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const ciudad_schema = new Schema({
    nombre: req_string,
    pais: {
        type: Schema.ObjectId,
        ref: 'pais',
    },
})

const model = mongoose.model('ciudad', ciudad_schema)
module.exports = model
