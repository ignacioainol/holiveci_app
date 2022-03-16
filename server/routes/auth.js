const express = require('express');
const router = express.Router();

const { signin, signup, profile } = require('../controllers/auth.controller');
const { tokenVerify } = require('../utils/verifyToken');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', tokenVerify, profile);

module.exports = router;