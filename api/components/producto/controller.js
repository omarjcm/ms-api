const storage = require('./storage')

function get_producto( filtro_producto ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_producto ) )
    })
}

function add_producto( producto ) {
    return new Promise((resolve, reject) => {
        if (!producto.codigo) {
            return reject('No hay datos suficientes.')
        }
        storage.add( producto )
        resolve( producto )        
    })
}

module.exports = {
    get_producto,
    add_producto,
}