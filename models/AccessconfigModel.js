const mongoose = require('mongoose');

const AccessconfigModel = mongoose.Schema({
	isTestActive: Boolean,
	allowSeeCorrect: Boolean
});

module.exports = mongoose.model('AccessconfigModel', AccessconfigModel, 'AccessConfig');