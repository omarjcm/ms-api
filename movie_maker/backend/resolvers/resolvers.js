const model = require('../model/model')

const rootValue = { 
    listMovies: () => {
        return model.find({})
    },
    addMovie: (data) => {
        let objeto = new model({
            name: data.name,
            genre: data.genre,
            year: data.year
        })
        objeto.save()
        return objeto
    }
}

module.exports = rootValue