const express = require('express')
const body_parser = require('body-parser')

const config = require('./config')

var app = express()

app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended: false}) )

app.listen( config.PORT )
console.log(`La aplicacion se encuentra arriba en http://localhost:${config.PORT}/`)