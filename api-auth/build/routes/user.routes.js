"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = require("../controllers/user.controller");
var router = (0, _express.Router)();
router.post('/', _user.createUser);
var _default = exports["default"] = router;