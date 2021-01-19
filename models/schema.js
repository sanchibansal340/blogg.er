const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

// model name should be singular of the collection name where you want to store it
const Blog = mongoose.model('Blog', blogSchema);
const User = mongoose.model('User', userSchema);
module.exports = { Blog, User };