'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const api = require('./routes');

app.set('port', (process.env.PORT || 3000));

// app.use(express.static(path.resolve(__dirname, '..', 'public')));
//
// app.get(['/', '/blog', '/work', '/cuentamecosas'], (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
// });
//
// app.get(['/blog/:url'], (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
// });

app.get(['/googlec55d785e32c5e7f1.html'], (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', '/googlec55d785e32c5e7f1.html'));
});
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api', api);

module.exports = app;
