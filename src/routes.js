const {addBookToShelf} = require("./addBookHandler");
const {getBookDetailHandler} = require("./getBookDetailHandler");
const {getBookFromShelf} = require("./getBookHandler");
const {updateBookHandler} = require("./updateBookHandler");

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
	{
		method: "*",
		path: "/books",
		handler: (req, h) => {
			return "Page can't be accessed!";
		},
	},
	{
		method: "GET",
		path: "/books/{bookId}",
		handler: getBookDetailHandler,
	},
	{
		method: "*",
		path: "/books/{any*}",
		handler: (req, h) => {
			return "Page not found";
		},
	},
	{
		method: "PUT",
		path: "/books/{bookId}",
		handler: updateBookHandler,
	},
];

module.exports = routes;
