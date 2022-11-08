const {bookshelf} = require('./bookshelf');
const {nanoid} = require('nanoid');

const addBookToShelf = (request, h) => {
  // JSON automatically converted into JS Object with HAPI
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const finished = pageCount === readPage ? true : false;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year: parseInt(year),
    author,
    summary,
    publisher,
    pageCount: parseInt(pageCount),
    readPage: parseInt(readPage),
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  // Check error
  // when there's no name
  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Failed adding book. Please fill out the name of the book.',
    });
    response.code(400);
    return response;
  }

  // when readPage bigger than pageCount
  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Failed adding book. readPage can\'t be bigger than pageCount',
    });
    response.code(400);
    return response;
  }

  // adding to shelf
  bookshelf.push(newBook);
  const isSuccess = bookshelf.filter((book) => book.id === id).length > 0;

  // returning the response
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Book added to shelf',
      data: {
        bookId: newBook.id,
      },
    });
    response.code(201);
    return response;
  } else {
    const response = h.response({
      status: 'error',
      message: 'Failed adding book',
    });
    response.code(500);
    return response;
  }
};

module.exports = {addBookToShelf};
