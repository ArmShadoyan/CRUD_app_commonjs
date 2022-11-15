const path = require("path");

module.exports = {
	mode:"development",// production
	entry:"./src/js/app.js",
	output:{
		path:path.resolve(__dirname,"build"),
		filename: "all.js"
	},
	watch: true
};