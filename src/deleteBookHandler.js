const {bookshelf} = require('./bookshelf');

const deleteBookHandler = (request, h) => {
  const {bookId} = request.params;

  const index = bookshelf.findIndex((book) => book.id === bookId);

  bookshelf.splice(index - 2, 1);

  // eslint-disable-next-line max-len
  const isSuccess = bookshelf.filter((book) => book.id === bookId).length === 0 ? true : false;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Success deleting book',
    });
    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: 'success',
      message: 'Failed to delete book',
    });
    response.code(404);
    return response;
  }
};

module.exports = {deleteBookHandler};
