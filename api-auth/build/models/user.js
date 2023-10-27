"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'role'
  }]
}, {
  timestamps: true,
  versionKey: false
});
userSchema.statics.encrypted_password = function (password) {
  var salt = bcryptjs.genSaltSync();
  return bcryptjs.hashSync(password, salt);
};
userSchema.statics.compare_password = function (password, received_password) {
  return bcryptjs.compareSync(password, received_password);
};
var _default = exports["default"] = mongoose.model('user', userSchema);