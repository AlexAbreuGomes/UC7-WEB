
let { books } = require("../database");

function listBooks(req, res) {
  return res.status(200).json(books);
}

function listBook(req, res) {
  const { id } = req.params;
  const result = books.find((book) => {
    return book.id === Number(id);
  })

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Please enter a valid number' });
  }

  if (!result) {
    return res.status(404).json({ message: 'book not found' });
  }
  return res.status(200).json(result);
}

function registerBook(req, res) {
  //console.log(req.body);
  const { id, title, author, year, pages } = req.body

  if (!id) {
    return res.status(400).json({ message: "The id field is required." })
  }

  if (!title) {
    return res.status(400).json({ message: "The title field is required." })
  }

  if (!author) {
    return res.status(400).json({ message: "The author field is required." })
  }

  if (!year) {
    return res.status(400).json({ message: "The year field is required." })
  }

  if (!pages) {
    return res.status(400).json({ message: "The pages field is required." })
  }

  const book = {
    id: id,
    title: title,
    author: author,
    year: year,
    pages: pages
  }

  books.push(book);

  return res.status(201).json(book);
}

function updateBook(req, res) {
  const { id } = req.params;
  const { title, author, year, pages } = req.body

  const result = books.find((book) => {
    return book.id === Number(id);
  })

  if (!result) {
    return res.status(404).json({ message: 'book not found' });
  }

  if (!title) {
    return res.status(400).json({ message: "The title field is required." })
  }

  if (!author) {
    return res.status(400).json({ message: "The author field is required." })
  }

  if (!year) {
    return res.status(400).json({ message: "The year field is required." })
  }

  if (!pages) {
    return res.status(400).json({ message: "The pages field is required." })
  }

  result.title = title;
  result.author = author;
  result.year = year;
  result.pages = pages;

  return res.status(204).send(result);
}

function deleteBook(req, res) {
  const { id } = req.params;

  const result = books.find((book) => {
    return book.id === Number(id);
  })

  if (!result) {
    return res.status(404).json({ message: 'book not found' });
  }

  books = books.filter((book) => {
    return book.id !== Number(id);
  })

  return res.status(200).json({ message: 'successfully deleted book' })
}


module.exports = {
  listBooks,
  listBook,
  registerBook,
  updateBook,
  deleteBook
}