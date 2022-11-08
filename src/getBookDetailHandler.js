const {bookshelf} = require('./bookshelf');

const getBookDetailHandler = (request, h) => {
  // request.params get bookId from link path parameter
  const {bookId} = request.params;

  const bookDetail = bookshelf.filter((book) => book.id === bookId);

  // check is the book exist on shelf
  const isSuccess = bookDetail.length > 0 ? true : false;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      data: {
        book: bookDetail[0],
      },
    });

    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: 'fail',
      message: 'Book not found',
    });

    response.code(404);
    return response;
  }
};

module.exports = {getBookDetailHandler};
