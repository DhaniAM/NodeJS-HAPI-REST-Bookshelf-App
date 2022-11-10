const {bookshelf} = require('./bookshelf');

const getBookFromShelf = (request, h) => {
  const {name, reading, finished} = request.query;

  // name query
  if (name) {
    const filteredBook = bookshelf.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase()),
    );

    const books = filteredBook.map((book) => {
      return {
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      };
    });

    const response = {
      status: 'success',
      data: {
        books: books,
      },
    };
    return response;
  }

  // reading query
  if (reading == 1) {
    const filteredBook = bookshelf.filter((book) => book.reading === true);

    const books = filteredBook.map((book) => {
      return {
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      };
    });

    const response = {
      status: 'success',
      data: {
        books: books,
      },
    };
    return response;
  } else if (reading == 0) {
    const filteredBook = bookshelf.filter((book) => book.reading === false);

    const books = filteredBook.map((book) => {
      return {
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      };
    });

    const response = {
      status: 'success',
      data: {
        books: books,
      },
    };
    return response;
  }

  // Finished query
  if (finished == 1) {
    const filteredBook = bookshelf.filter((book) => book.finished === true);

    const books = filteredBook.map((book) => {
      return {
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      };
    });

    const response = {
      status: 'success',
      data: {
        books: books,
      },
    };
    return response;
  } else if (finished == 0) {
    const filteredBook = bookshelf.filter((book) => book.finished === false);

    const books = filteredBook.map((book) => {
      return {
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      };
    });

    const response = {
      status: 'success',
      data: {
        books: books,
      },
    };
    return response;
  }

  // No query, get all book from shelf
  const books = bookshelf.map((book) => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher,

    };
  });

  const response = {
    status: 'success',
    data: {
      books: books,
    },
  };
  return response;
};

module.exports = {getBookFromShelf};
