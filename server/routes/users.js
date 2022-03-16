const express = require('express');
const router = express.Router();

const { getInfo } = require('../controllers/users.controller');

router.get('/', getInfo);

module.exports = router;

