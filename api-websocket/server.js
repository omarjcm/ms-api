const express = require('express')

let app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const config = require('./config')

app.use('/', express.static('public'))

io.on('connection', function(socket){
    console.log('Nuevo cliente conectado')
    socket.emit('mensaje', 'Bienvenido')
})

app.listen(config.PORT, function() {
    console.log(`La aplicacion esta escuchando en http://localhost:${config.PORT}`)
})