const {addBookToShelf} = require("./addBookHandler");
const {getBookFromShelf} = require("./getBookHandler");

const routes = [
	{
		method: "POST",
		path: "/books",
		handler: addBookToShelf,
	},
	{
		method: "GET",
		path: "/books",
		handler: getBookFromShelf,
	},
];

module.exports = routes;
