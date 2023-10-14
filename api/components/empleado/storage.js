const model = require('./model')

function get_empleado( filtroEmpleado ) {
    let filtro = {}
    if (filtroEmpleado) {
        filtro = { cedula: filtroEmpleado }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_empleado( empleado ) {
    const objeto = new model( empleado )
    objeto.save()
}

async function update_empleado( empleado ) {
    const objeto = await model.findOne( {cedula: empleado.cedula} )

    if ( objeto ) {
        objeto.nombre = empleado.nombre
        objeto.apellido = empleado.apellido
        objeto.usuario = empleado.usuario
        objeto.clave = empleado.clave
    
        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_empleado( cedula ) {
    return await model.deleteOne({cedula: cedula})
}

module.exports = {
    add: add_empleado,
    get: get_empleado,
    update: update_empleado,
    delete: delete_empleado,
}