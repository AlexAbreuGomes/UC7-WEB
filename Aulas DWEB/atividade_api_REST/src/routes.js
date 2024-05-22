const express = require('express');
const { listBooks, listBook, registerBook, updateBook, deleteBook } = require('./controllers/libraryFunctions');

const routes = express();

routes.get('/', listBooks);
routes.get('/books/:id', listBook);
routes.post('/books', registerBook);
routes.put('/books/:id', updateBook);
routes.delete('/books/:id', deleteBook);

module.exports = routes