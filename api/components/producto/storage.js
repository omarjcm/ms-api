const model = require('./model')

function get_producto( filtro_producto ) {
    let filtro = {}
    if (filtro_producto) {
        filtro = { cedula: filtro_producto }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_producto( producto ) {
    const objeto = new model( producto )
    objeto.save()
}

module.exports = {
    add: add_producto,
    get: get_producto,
}