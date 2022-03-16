

const create = async (req, res) => {
    try {
        res.status(201).json({ msg: 'user created' });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const getInfo = (req, res) => {
    try {
        res.status(201).json({ msg: 'infoooo user :D' });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    create,
    getInfo
}