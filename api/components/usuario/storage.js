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


module.exports = {
    agregar:agregarUsuario,
    obtener:obtenerUsuario,
}