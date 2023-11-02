const express = require('express');
const {signup} = require('../controllers/sign_up');
const {login} = require('../controllers/sign_in');

const router = express.Router();

router.post('/sign_in', login);
router.post('/sign_up', signup);

module.exports = router;