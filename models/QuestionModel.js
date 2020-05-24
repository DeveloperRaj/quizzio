const mongoose = require('mongoose');

const QuestionModel = mongoose.Schema({
	question: String,
	options: [String],
	correct: Number
});

module.exports = mongoose.model('QuestionModel', QuestionModel, 'Questions');