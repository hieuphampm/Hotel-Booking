var jwt = require('jsonwebtoken');
const secret = `${process.env.SECRET_KEY}`;

function authenticated(req, res, next) {
    const authHeader = String(req.headers['authorization'] || '');
    if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);
        try {
            const {username, role} = jwt.verify(token, secret);
            req.user = {
                username: username,
                role: role
            };
            return next();
        } catch (e){
            res.send({
                success: false, code: 401,
                message: "Unauthorized access - Invalid token",
            }); 
            return next(false);
        }
    } else {
        res.send({
            success: false, code: 401,
            message: "Unauthorized access - No token"
        }); 
        return next(false);
    }
}

function sign(username, role) {
    const token = jwt.sign({
        username: username ,
        role: role,
    }, secret, { expiresIn: '1h' });
    return token;
}

module.exports.sign = sign;
module.exports.authenticated = authenticated;
