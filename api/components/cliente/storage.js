const model = require('./model')

function get_cliente( filtro_cliente ) {
    let filtro = {}
    if (filtro_cliente) {
        filtro = { cedula: filtro_cliente }
    }
    const objeto = model.find( filtro )
    return objeto
}

async function add_cliente( cliente ) {
    const objeto = new model( cliente )
    await objeto.save()
}

module.exports = {
    add: add_cliente,
    get: get_cliente,
}