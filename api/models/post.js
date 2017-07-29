'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: String,
  picture: String,
  description: String,
  contentPost: String,
  category: {
    type: String,
    enum: ['Vagine', 'Angry', 'Developer']
  },
  date: { type: Date, default: Date.now() },
  postit: Boolean,
  views: Number
});

module.exports = mongoose.model('Post', PostSchema);
