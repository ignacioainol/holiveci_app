require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: '48h'
    });
}

const tokenVerify = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.send("Access Denied!");

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            res.status(403).send('Access Denied. Token expired or incorrect');
        } else {
            next();
        }
    })
}

module.exports = {
    tokenVerify,
    generateToken
}