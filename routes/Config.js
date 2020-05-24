const express = require('express');
const router = express.Router();

const AccessconfigModel = require('../models/AccessconfigModel.js');

router.get('/', async (req, res) => {
	const data = await AccessconfigModel.findOne({});
	res.json(data);
});

module.exports = router;