const express = require('express');
const {getTranscript} = require('../controllers/transcript');
const router = express.Router();

router.post('/getTranscript', getTranscript);

module.exports = router;