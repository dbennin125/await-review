const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/new', require('./lib/routes/new'));


module.exports = app;
