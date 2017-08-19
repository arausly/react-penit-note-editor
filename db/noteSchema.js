const mongoose = require('mongoose');
const {
	Schema
} = require('mongoose');

const noteSchema = new Schema({
	title: {
		type: String,
		required: true,
		minlength: 4,
		trim: true
	},
	text: {
		type: String,
		required: true,
		minlength: 4,
		trim: true,
	},
});


module.exports =noteSchema;
