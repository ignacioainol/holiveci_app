
const { createUser, getUserByEmail } = require("../models/Auth");
const { generateToken } = require("../utils/verifyToken");

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const loginUser = await getUserByEmail(email);

        if (loginUser) {
            if (loginUser.user_email == email && loginUser.user_password == password) {
                res.status(200).send({
                    user_id: loginUser.user_id,
                    email,
                    token: generateToken(loginUser)
                })
            } else {
                res.status(401).send(`Email o contraseña incorrecta`);
            }
        } else {
            res.status(401).send(`No existe usuario con el email ${email}`);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const signup = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).send(newUser);

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