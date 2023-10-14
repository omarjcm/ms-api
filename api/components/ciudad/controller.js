const storage = require('./storage')

function get_ciudad( filtro_ciudad ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_ciudad ) )
    })
}

function add_ciudad( ciudad ) {
    return new Promise((resolve, reject) => {
        if (!ciudad.nombre) {
            return reject('No existen datos.')
        }
        storage.add( ciudad )
        resolve( ciudad )  
    })
}

function update_ciudad( ciudad ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( ciudad )
        if (resultado) {
            return resolve( ciudad )
        } else {
            return reject('No existe el ciudad.')
        }
    })
}

function delete_ciudad( ciudad ) {
    return new Promise((resolve, reject) => {
        storage.delete( ciudad )
        resolve( ciudad )
    })
}

module.exports = {
    get_ciudad,
    add_ciudad,
    update_ciudad,
    delete_ciudad,
}