const express = require('express');
const {anyPrompt, summarize, quiz} = require('../controllers/generative');
const router = express.Router();

router.post('/anyPrompt', anyPrompt);
router.post('/summarize', summarize);
router.post('/quiz', quiz);

module.exports = router;