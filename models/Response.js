const mongoose = require('mongoose');
const async = require('async');

const responseSchema = new mongoose.Schema({
	salary: Number,
	bonus: Number,
}, { timestamps: true });

const Response = mongoose.model('Reponse', responseSchema);
module.exports = Response;