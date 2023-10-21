const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const db = require('./db')
const app = express()

db()

const schema = buildSchema(`
    type Query {
        listMovies: [Movie]
    }
    type Movie {
        name: String,
        genre: String,
        year: Int
    }
`)

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

const rootValue = { listMovies: () => {
    return movies
} }

app.use('/graphql', graphqlHTTP({
    schema, 
    rootValue,
    graphiql: true
}))

app.get('/hi', (req, res)=>{
    res.send('Hola desde el servidor.')
})

let port = 3000
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})