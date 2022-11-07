const { addBookToShelf } = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: addBookToShelf,
	},
	{
		method: 'GET',
		path: '/books',
		handler: getBookFromShelf,
	}
];

module.exports = routes;