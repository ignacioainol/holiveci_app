const express = require('express');
const router = express.Router();

const { create } = require('../controllers/community.controller');
const { tokenVerify } = require('../utils/verifyToken');


router.post('/create', create);

module.exports = router;