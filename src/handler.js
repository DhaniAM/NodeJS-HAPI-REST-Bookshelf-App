const { finishedShelf, unfinishedShelf } = require("./bookshelf");

const addBookToShelf = (request, h) => {
	const {
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading
	} = request.payload;

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
		updatedAt
	};

	const isSuccess = {
		status: false
	};

	if (finished) {
		finishedShelf.push(newBook);
		isSuccess.status = finishedShelf.filter((book) => book.id === id).length > 0;
	} else {
		unfinishedShelf.push(newBook);
		isSuccess.status = unfinishedShelf.filter((book) => book.id === id).length > 0;
	}

	// Response status
	if (isSuccess.status) {
		const response = h.response({
			status: 'success',
			message: 'Book added to shelf',
			data: {
				bookId: id,
			},
		});
		response.code(201);
		return response;
	} else {
		const response = h.response({
			status: 'failed',
			message: 'Failed to add book'
		});
		response.code(500);
		return response;
	}

}

module.exports = {addBookToShelf};