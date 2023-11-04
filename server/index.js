const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb=require('./config/dbConn')
const morgan = require('morgan');
const transcriptRoutes = require('./routes/transcript');
const generativeRoutes = require('./routes/generative');
const authRoutes = require('./routes/auth');
const env = require('./config/env');
const router = require('./routes/router');
const app = express();

connectDb()
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);


app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
  
  process.on('uncaughtException', error => {
    console.log('Uncaught Exception: ', error);
    // process.exit(1)
  });
  