const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const transcriptRoutes = require('./routes/transcript');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/transcript', transcriptRoutes);

app.listen(5000, () => {
    console.log('Server started on port 5000');
})
