const mongoose = require('mongoose');

const StudentModel = mongoose.Schema({
	name: String,
	enrollmentno: String,
	score: Number
});

module.exports = mongoose.model('StudentModel', StudentModel, 'Students');