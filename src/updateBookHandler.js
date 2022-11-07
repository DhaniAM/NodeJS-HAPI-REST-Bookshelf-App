const {bookshelf} = require("./bookshelf");

const updateBookHandler = (request, h) => {
	// request.params get bookId from link path parameter
	const {bookId} = request.params;

	// request.payload get data from the POST or PUT
	const {name, year, author, summary, publisher, pageCount, readPage, reading} =
		request.payload;

	// create new date when updated
	const updatedAt = new Date().toISOString();
	const finished = pageCount === readPage ? true : false;

	const index = bookshelf.findIndex(book => book.id === bookId);

	// when book is exist in the shelf
	if (index !== -1) {
		// validate first
		if (!name) {
			const response = h.response({
				status: "fail",
				message: "Failed updating book. Please fill the book name",
			});
			response.code(400);
			return response;
		}

		if (readPage > pageCount) {
			const response = h.response({
				status: "fail",
				message:
					"Failed updating book. readPage can't be bigger than pageCount",
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
			status: "success",
			message: "book updated",
		});
		response.code(200);
		return response;
	} else {
		// when book Id not avaible in shelf
		const response = h.response({
			status: "fail",
			message: "Failed adding book. Book Id not found",
		});
		response.code(404);
		return response;
	}
};

module.exports = {updateBookHandler};
