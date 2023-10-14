const storage = require('./storage')

function get_pais( filtro_pais ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_pais ) )
    })
}

function add_pais( pais ) {
    return new Promise((resolve, reject) => {
        if (!pais.nombre) {
            return reject('No existen datos.')
        }
        storage.add( pais )
        resolve( pais )        
    })
}

function update_pais( pais ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( pais )
        if (resultado) {
            return resolve( pais )
        } else {
            return reject('No existe el pais.')
        }
    })
}

function delete_pais( pais ) {
    return new Promise((resolve, reject) => {
        storage.delete( pais )
        resolve( pais )
    })
}

module.exports = {
    get_pais,
    add_pais,
    update_pais,
    delete_pais,
}