const {response} = require("@hapi/hapi/lib/validation");
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
};

module.exports = {addBookToShelf};
