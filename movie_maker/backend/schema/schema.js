const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        listMovies: [Movie]
    }
    type Mutation {
        addMovie(name: String!, genre: String!, year: Int!): Movie
    }
    type Movie {
        name: String,
        genre: String,
        year: Int
    }
`)

module.exports = schema