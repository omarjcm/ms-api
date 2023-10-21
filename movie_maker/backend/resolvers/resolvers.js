const movies = [
    {name: 'John Wick 1', genre: 'Action', year: 2017},
    {name: 'John Wick 2', genre: 'Action', year: 2019},
    {name: 'John Wick 3', genre: 'Action', year: 2021},
    {name: 'John Wick 4', genre: 'Action', year: 2022},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019},
    {name: 'John Wick', genre: 'Action', year: 2019}
]

const rootValue = { 
    listMovies: () => {
        return movies
    },
    addMovie: (data) => {
        let objeto = {
            name: data.name,
            genre: data.genre,
            year: data.year
        }
        movies.push(objeto)
        return objeto
    }
}

module.exports = rootValue