const express = require('express');
const router = express.Router();

const { create, createTower } = require('../controllers/community.controller');
const { tokenVerify } = require('../utils/verifyToken');


router.post('/create', create);
router.post('/createTower', createTower)

module.exports = router;