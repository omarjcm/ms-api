const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gpizarro:inexcelsisdeo@cluster0.jxysv4e.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProductModel = mongoose.model('Product', {
  name: String,
  value: Number,
});

module.exports = ProductModel