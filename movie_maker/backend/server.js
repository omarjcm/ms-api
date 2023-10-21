const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const movieResolvers = require('./resolvers/resolvers')
const movieSchema = require('./schema/schema')
const db = require('./db')

const app = express()

db()

app.use('/graphql', graphqlHTTP({
    schema: movieSchema, 
    rootValue: movieResolvers,
    graphiql: true
}))

app.get('/hi', (req, res)=>{
    res.send('Hola desde el servidor.')
})

let port = 3000
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})