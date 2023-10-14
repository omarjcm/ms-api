const model = require('./model')

function get_factura( filtro_factura ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtro_factura) {
            filtro = { codigo: filtro_factura }
        }
        model.find( filtro )
            .populate('empleado')
            .populate('cliente')
            .populate({
                path:'factura_detalle',
                populate:{
                    path: 'producto',
                    model:'producto'
                }
            })
            .exec( (error, data) => {
                lista = []
                for (let elemento of data) {
                    objeto = {
                        empleado: {
                            nombre: elemento.empleado.nombre,
                            apellido: elemento.empleado.apellido
                        },
                        id:elemento._id,
                        cliente: {
                            nombre: elemento.cliente.nombre,
                            apellido: elemento.cliente.apellido
                        }
                    }
                    objeto.detalles = []
                    for (let detalle of elemento.factura_detalle) {
                        registro = { 
                            producto: detalle.producto.nombre,
                            valor: detalle.producto.valor,
                            cantidad: detalle.cantidad,
                            valor_x_cantidad: detalle.valor_x_cantidad
                        }
                        objeto.detalles.push( registro )
                    }
                    lista.push( objeto )
                }
                if (error)
                    reject(error)
                else 
                    resolve(lista)
            } )
    }) 
}

function add_factura( factura ) {
    factura.fecha_emision = new Date()

    const objeto = new model( factura )
    objeto.save()
}

async function update_factura( factura ) {
    const objeto = await model.findOne( {codigo: factura.codigo} )

    if ( objeto ) {
        objeto.estado = False
        return resultado = await objeto.save()
    } else {
        return null
    }
}

module.exports = {
    add: add_factura,
    get: get_factura,
    update: update_factura
}