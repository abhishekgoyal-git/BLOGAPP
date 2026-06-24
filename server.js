const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();
app.use(express.json());

 mongoose 
  .connect
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(err));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const blogschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});