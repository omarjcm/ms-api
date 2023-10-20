const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

let schema = buildSchema(`
    type Cliente {
        id: Int
        nombre: String
        telefono: String
    }
    type Query {
        clientes: [Cliente]
        cliente(id: Int): Cliente
    }
    type Mutation {
        addCliente(nombre: String, telefono: String): Cliente
    }
`)

let clientes = []
let counter = 1

let root = {
    clientes: () => { return clientes },
    cliente: (data) => {
        for (let i=0; i<clientes.length; i++) {
            if (clientes[i].id == data.id) {
                return clientes[i]
            }
        }
    },
    addCliente: (data) => {
        let objeto = {'id':counter, 'nombre':data.nombre, 'telefono': data.telefono}
        clientes.push( objeto )
        counter++
        return objeto
    }
}

let app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

let port = 4001
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})