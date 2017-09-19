let express = require('express'),
	router = express.Router(),
	homeService  = require('../services/home.service'),
	loginService = require('../services/login.service');;

router.get('/home',  homeService);
router.get('/login', loginService);

module.exports = router;
