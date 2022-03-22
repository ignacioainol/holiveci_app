const { createCommunity, newTower } = require("../models/Community");


const create = async (req, res) => {
    try {
        // const { name, user_id, commune_id } = req.body;
        const newCommunity = await createCommunity(req.body)
        res.status(201).send(newCommunity);
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

const createTower = async (req, res) => {
    try {
        const towerNew = await newTower(req.body);
        res.status(201).send(towerNew);
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports = {
    create,
    createTower
}