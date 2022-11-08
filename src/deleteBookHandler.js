const {bookshelf} = require('./bookshelf');

const deleteBookHandler = (request, h) => {
  const {bookId} = request.params;

  const index = bookshelf.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    bookshelf.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Success deleting book',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Failed to delete book. Book Id not found',
  });
  response.code(404);
  return response;
};

module.exports = {deleteBookHandler};
