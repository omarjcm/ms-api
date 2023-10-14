const storage = require('./storage')

function get_factura( filtro_factura ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_factura ) )
    })
}

function add_factura( factura ) {
    return new Promise((resolve, reject) => {
        if (!factura.codigo) {
            return reject('No hay datos suficientes.')
        }
        storage.add( factura )
        resolve( factura )        
    })
}

function update_factura( factura ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( factura )
        if (resultado) {
            return resolve( factura )
        } else {
            return reject('No existe el factura.')
        }
    })
}

module.exports = {
    get_factura,
    add_factura,
    update_factura
}