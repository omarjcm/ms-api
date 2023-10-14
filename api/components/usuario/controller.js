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

function actualizarUsuario( dato ) {
    return new Promise((resolve, reject) => {
        let usuario = {
            usuario: dato.usuario,
            nombre: dato.nombre,
            apellido: dato.apellido
        }
        resolve( storage.actualizar( usuario ) )
    })
}

function eliminarUsuario( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarUsuario,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
}