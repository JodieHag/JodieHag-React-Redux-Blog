const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = Schema({
  title: String,
  picture: String,
  description: String,
  contentPost: String,
  category: {
    type: String,
    enum: ['Developer', 'Human Error', 'Feminist', 'Traveling']
  },
  date: {
    type: Date
  },
  postit: Boolean,
  views: Number,
  url: String
});

module.exports = mongoose.model('Post', PostSchema);
