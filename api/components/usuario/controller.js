const storage = require('./storage')

function agregarUsuario( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerUsuario( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

module.exports = {
    agregarUsuario,
    obtenerUsuario,
}