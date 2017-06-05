const mongoose = require('mongoose');
const async = require('async');

const surveySchema = new mongoose.Schema({
	title:  String,
	description: String,
	active: Boolean,
	date: { type: Date, default: Date.now },
	responses: [{
		salary: Number,
		bonus: Number,
	}],
	messages: [{
		email: String,
		message: String
	}]
}, { timestamps: true });

const Survey = mongoose.model('Survey', surveySchema);
module.exports = Survey;