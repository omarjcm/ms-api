const mongoose = require('mongoose');

const conectar = () => {
    mongoose.connect('mongodb+srv://gpizarro:inexcelsisdeo@cluster0.jxysv4e.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {console.log('MONGODB conectado.')})
      .catch((error) => {console.log( `[error] - ${error}` )})
}

module.exports = conectar