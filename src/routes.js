const { addBookToShelf } = require("./handler");

const routes = [
	{
		method: 'POST',
		path: '/add',
		handler: addBookToShelf,
	}
];

module.exports = routes;