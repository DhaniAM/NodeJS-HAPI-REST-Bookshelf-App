const {addBookToShelf} = require("./addBookHandler");
const {getBookDetailHandler} = require("./getBookDetailHandler");
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
];

module.exports = routes;
