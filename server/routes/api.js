var express = require("express");
var router = express.Router();

let bookId = 0;

const books = [
  {
    id: bookId++,
    author: "J.R.R. Tolkien",
    title: "La Communauté de l'Anneau",
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
  {
    id: bookId++,
    author: "J.K. Rowling",
    title: "Harry Potter à l'Ecole des Sorciers",
  },
];

router.get("/books", function (req, res, next) {
  res.json(books);
});

module.exports = router;
