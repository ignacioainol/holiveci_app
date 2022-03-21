const { createCommunity } = require("../models/Community");


const create = async (req, res) => {
    try {
        // const { name, user_id, commune_id } = req.body;
        const newCommunity = await createCommunity(req.body)
        res.status(201).send(newCommunity);
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}


module.exports = {
    create
}