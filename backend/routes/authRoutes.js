require('dotenv').config();

var restify = require('restify');
var jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const RoomModel = require('../models/roomModel');
const authController = require('../models/authController'); 

module.exports = {
  applyRoutes: function (server) {
    server.post('/auth/login', authController.login);

    server.post('/auth/register', authController.register);
  }
};
