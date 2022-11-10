const {bookshelf} = require('./bookshelf');

const updateBookHandler = (request, h) => {
  // request.params get bookId from link path parameter
  const {bookId} = request.params;

  // request.payload get data from the POST or PUT
  // eslint-disable-next-line max-len
  const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;

  // create new date when updated
  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage ? true : false;

  const index = bookshelf.findIndex((book) => book.id === bookId);

  // when book is exist in the shelf
  if (index !== -1) {
    // validate first
    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      });
      response.code(400);
      return response;
    }

    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        // eslint-disable-next-line max-len
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }

    // add to shelf
    bookshelf[index] = {
      ...bookshelf[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  } else {
    // when book Id not avaible in shelf
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }
};

module.exports = {updateBookHandler};
