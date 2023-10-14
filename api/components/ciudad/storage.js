const model = require('./model')

function get_ciudad( filtrociudad ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtrociudad) {
            filtro = { nombre: filtrociudad }
        }
        model.find( filtro )
            .populate('pais')
            .exec( (error, data) => {
                lista = []
                for (elemento of data) {
                    lista.push( {id:elemento._id, ciudad:elemento.nombre, pais:elemento.pais.nombre} )
                }
                if (error)
                    reject(error)
                else 
                    resolve(lista)
            })
    })
}

function add_ciudad( ciudad ) {
    const objeto = new model( ciudad )
    objeto.save()
}

async function update_ciudad( ciudad ) {
    const objeto = await model.findOne( {_id: ciudad.id} )

    if ( objeto ) {
        objeto.nombre = ciudad.nombre
    
        return resultado = await objeto.save()    
    } else {
        return null
    }
}

async function delete_ciudad( ciudad ) {
    return await model.deleteOne({_id: ciudad.id})
}

module.exports = {
    add: add_ciudad,
    get: get_ciudad,
    update: update_ciudad,
    delete: delete_ciudad,
}