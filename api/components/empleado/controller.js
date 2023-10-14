const storage = require('./storage')

function get_empleado( filtroEmpleado ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtroEmpleado ) )
    })
}

function add_empleado( empleado ) {
    return new Promise((resolve, reject) => {
        if (!empleado.cedula || !empleado.nombre || !empleado.apellido || !empleado.usuario || !empleado.clave) {
            return reject('No hay datos suficientes.')
        }
        storage.add( empleado )
        resolve( empleado )        
    })
}

function update_empleado( empleado ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( empleado )
        if (resultado) {
            return resolve( empleado )
        } else {
            return reject('No existe el empleado.')
        }
    })
}

function delete_empleado( cedula ) {
    return new Promise((resolve, reject) => {
        storage.delete( cedula )
        resolve( cedula )
    })
}

module.exports = {
    get_empleado,
    add_empleado,
    update_empleado,
    delete_empleado,
}