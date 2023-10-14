const Model = require('./model')

async function agregarUsuario( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}


module.exports = {
    agregar:agregarUsuario,
}