const express = require('express');
const router = express.Router();

const QuestionModel = require('../models/QuestionModel.js');

router.get('/', async (req, res) => {
	try {
		const data = await QuestionModel.find({});
		res.json({message: 'success', data});
	} catch (error) {
		res.json({ message: `ERROR: ${error}` });
	}
});

module.exports = router;