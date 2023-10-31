const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const transcriptRoutes = require('./routes/transcript');
const generativeRoutes = require('./routes/generative');
require('dotenv').config();

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/transcript', transcriptRoutes);
app.use('/generative', generativeRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
