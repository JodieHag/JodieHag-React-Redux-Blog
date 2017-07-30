'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const api = require('./routes');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.get(['/', '/blog', '/cuentamecosas'], (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;