const express = require('express');
const router = express.Router();
const authController = require('../models/authController');

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = {
  applyRoutes: function (server) {
    server.use('/auth', router);  
  }
};
