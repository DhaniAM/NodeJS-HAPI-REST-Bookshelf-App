const {bookshelf} = require("./bookshelf");

const addBookToShelf = (request, h) => {
	const {name, year, author, summary, publisher, pageCount, readPage, reading} =
		request.payload;

	const id = nanoid(16);
	const finished = pageCount === readPage ? true : false;
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;

	const newBook = {
		id,
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		finished,
		reading,
		insertedAt,
		updatedAt,
	};

	let isSuccess = false;

	// Check book data is correct, return error
	if (!name) {
		response.code(400);
		const response = {
			status: "fail",
			message: "Failed adding book. Please fill the name of the book",
		};
		return response;
	}

	if (readPage > pageCount) {
		response.code(400);
		const response = {
			status: "fail",
			message: "Failed adding book. readPage cant be higher than pageCount",
		};
		return response;
	}

	// add to bookshelf
	bookshelf.push(newBook);
	isSuccess = bookshelf.filter(book => book.id === id).length > 0;

	// return response status
	if (isSuccess) {
		const response = h.response({
			status: "success",
			message: "Success adding book to shelf",
			data: {
				bookId: id,
			},
		});
		response.code(201);
		return response;
	} else {
		const response = h.response({
			status: "failed",
			message: "Failed adding book to shelf",
		});
		response.code(500);
		return response;
	}
};

module.exports = {addBookToShelf};
