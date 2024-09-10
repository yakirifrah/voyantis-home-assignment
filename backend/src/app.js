const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const queueRoutes = require('./routes/queueRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', queueRoutes);

module.exports = app;