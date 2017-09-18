let express = require('express'),
	router = express.Router(),
	homeService = require('../services/home.service');

router.get('/', homeService);

module.exports = router;