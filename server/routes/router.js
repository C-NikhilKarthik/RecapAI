const router = require('express').Router();

const authRouter = require('./auth');
const generativeRouter = require('./generative')
const transcriptRouter = require('./transcript')

router.use('/auth',authRouter)
router.use('/generative', generativeRouter);    
router.use('/transcript', transcriptRouter);
module.exports = router;
