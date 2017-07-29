'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = Schema({
  user: String,
  password: String,
  name: String,
  email: String,
  genero: {
    type: String,
    enum: ['Hombre', 'Mujer', 'Trans', 'Anónimo']
  },
  date: { type: Date, default: Date.now() },
  age: Number
});

module.exports = mongoose.model('Users', UsersSchema);
