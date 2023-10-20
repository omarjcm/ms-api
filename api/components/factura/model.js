const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_date = {
    type: Date,
    required: true,
}

const req_string = {
    type: String,
    required: true
}

const req_number = {
    type: Number,
    required: true,
}

const req_boolean = {
    type: Boolean,
    required: true,
}

const factura_detalle_schema = new Schema({
    producto: {
        type: Schema.ObjectId,
        ref: 'producto',
    },
    cantidad: req_number,
    valor_x_cantidad: req_number,
}, {
    timestamps: true,
})

const factura_schema = new Schema({
    empleado: {
        type: Schema.ObjectId,
        ref: 'empleado',
    },
    cliente: {
        type: Schema.ObjectId,
        ref: 'cliente',
    },
    codigo: req_string,
    estado: req_boolean,
    fecha_emision: req_date,
    valor_subtotal: req_number,
    valor_iva: req_number,
    valor_total: req_number,
    factura_detalle: [factura_detalle_schema]
}, {
    timestamps: true,
})

const model = mongoose.model('Factura', factura_schema)
module.exports = model