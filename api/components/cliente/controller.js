const storage = require('./storage')

function get_cliente( filtro_cliente ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_cliente ) )
    })
}

function add_cliente( cliente ) {
    return new Promise((resolve, reject) => {
        if (!cliente.cedula) {
            return reject('No hay datos suficientes.')
        }
        storage.add( cliente )
        resolve( cliente )        
    })
}

module.exports = {
    get_cliente,
    add_cliente,
}