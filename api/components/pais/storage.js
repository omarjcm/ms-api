const model = require('./model')

function get_pais( filtro_pais ) {
    let filtro = {}
    if (filtro_pais) {
        filtro = { nombre: filtro_pais }
    }
    const objeto = model.find( filtro )
    return objeto
}

function add_pais( pais ) {
    const objeto = new model( pais )
    objeto.save()
}

async function update_pais( pais ) {
    const objeto = await model.findOne( {_id: pais.id} )

    if ( objeto ) {
        objeto.nombre = pais.nombre
    
        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_pais( pais ) {
    return await model.deleteOne({_id: pais.id})
}

module.exports = {
    add: add_pais,
    get: get_pais,
    update: update_pais,
    delete: delete_pais,
}