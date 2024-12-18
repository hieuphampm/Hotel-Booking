var jwt = require('jsonwebtoken');
var Router = require('restify-router').Router;
const router = new Router();
const User = require('../models/user');
const {sign} = require('./authenticate');

router.post('/login', async (req, res) => {
    var {username = "", password = ""} = req.params;

    if ((username.length == 0)
        || (password.length == 0)
    ) {
        res.send({
            success: false,
            code: 401,
            message: "Invalid username or password"
        })
    }

    const {success, error_code, message, data} = 
	    await User.login(username, password);

    if (success) {
        const token = sign(username, data.role);
        res.send({
            success: true,
            code: 200,
            message: "Login successfully",
            token: token
        })
    } else {
        res.send({
            success: false,
            code: 401,
            message: "Invalid username or password"
        });
    }
});

module.exports = router;