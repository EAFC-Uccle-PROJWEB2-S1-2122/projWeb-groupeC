var express = require("express");
var router = express.Router();

let bookId = 0;

const books = [
  {
    id: bookId++,
    author: "J.R.R. Tolkien",
    title: "La Compagnie de l'Anneau",
  },
  {
    id: bookId++,
    author: "J.R.R. Tolkien",
    title: "Les Deux Tours",
  },
  {
    id: bookId++,
    author: "J.R.R. Tolkien",
    title: "Le Retour du Roi",
  },
];

router.get("/books", function (req, res, next) {
  const searchTerm = req.query.search;
  let filteredBooks;
  if (searchTerm) {
    filteredBooks = books.filter((book) => {
      return (
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  } else {
    filteredBooks = books;
  }
  res.json(filteredBooks);
});

router.post("/books", function (req, res, next) {
  const newBook = req.body;
  newBook.id = bookId++;
  books.push(newBook);
  res.sendStatus(201);
});

module.exports = router;
