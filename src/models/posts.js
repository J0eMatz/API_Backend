const mongoose = require("mongoose");

//Esquema
const postSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  dateMiliseconds: {
    type: Number,
  },
  reactions: {
    type: Number,
  },
  description: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
  tags: {
    type: Array,
  },
  picture: {
    type: String,
  },
  author: {
    type: String,
  },
});

const Posts = mongoose.model("Posts", postSchema); // Modelo
module.exports = Posts;
