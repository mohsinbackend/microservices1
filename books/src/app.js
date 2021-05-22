const express = require("express");
const Book = require("./models/books_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {

  res.json({ msg: "books" });

});

app.get("/api/v1/books", async (req, res) => {

  const books = await Book.find({});
  res.json(books);

});

app.post("/api/v1/books", async (req, res) => {

  const book = new Book({ name: req.body.name });
  const savedBook = await book.save();
  res.json(savedBook);

});

module.exports = app;
