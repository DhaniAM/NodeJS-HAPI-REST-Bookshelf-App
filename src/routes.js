const { addBookToShelf } = require("./handler");

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: addBookToShelf,
	}
];

module.exports = routes;