const storage = require('./storage')

function agregarUsuario( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

module.exports = {
    agregarUsuario,
} 