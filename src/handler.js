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
}

module.exports = {addBookToShelf};