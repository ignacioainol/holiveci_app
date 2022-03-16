
const { generateToken } = require("../utils/verifyToken");

const signin = (req, res) => {
    try {
        const user = {
            username: 'Joe Smith',
            email: 'test@gmail.com'
        }

        res.status(200).send({
            token: generateToken(user)
        });


    } catch (error) {
        res.status(500).send(error.message);
    }
}

const signup = (req, res) => {
    try {
        res.send("signup");
    } catch (error) {
        res.send(error.message);
    }
}

const profile = (req, res) => {
    try {
        res.send("PROFILEEE");
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = {
    signin,
    signup,
    profile
}