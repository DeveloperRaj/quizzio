const express = require('express');
const router = express.Router();

const StudentModel = require('../models/StudentModel.js');

router.post('/add', async (req, res) => {
	try {
		const { name, enrollment, score } = req.body;
		const newStudentModel = new StudentModel({
			name,
			enrollmentno: enrollment,
			score
		});
		await newStudentModel.save();
		res.json({ message: 'success' });
	} catch(error) {
		res.json({ message: 'error' });
	}
});

module.exports = router;