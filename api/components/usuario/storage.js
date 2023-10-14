const Model = require('./model')

async function agregarUsuario( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}

async function obtenerUsuario( filtro ) {
    let mi_filtro = {}

    if (filtro.usuario != null) {
        mi_filtro = { usuario: filtro.usuario }
    }
    const resultado = await Model.find( mi_filtro )
    return resultado
}


async function actualizarUsuario(dato) {
    const nuevo_objeto = await Model.findOne( { usuario: dato.usuario } )

    nuevo_objeto.nombre = dato.nombre
    nuevo_objeto.apellido = dato.apellido
    
    const resultado = await nuevo_objeto.save()
    return resultado
}


module.exports = {
    agregar:agregarUsuario,
    obtener:obtenerUsuario,
    actualizar:actualizarUsuario,
}