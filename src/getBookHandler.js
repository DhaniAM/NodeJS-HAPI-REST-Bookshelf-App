const {bookshelf} = require("./bookshelf");

const getBookFromShelf = () => {
	const books = bookshelf.map(book => {
		return {
			id: book.id,
			name: book.name,
			publisher: book.publisher,
		};
	});

	const response = {
		status: "success",
		data: {
			books: books,
		},
	};
	return response;
};

module.exports = {getBookFromShelf};
