require('dotenv').config();

const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log(token);
