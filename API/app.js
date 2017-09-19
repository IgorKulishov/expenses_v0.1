let express = require('express'),
	app = express(),
	router = require('./src/controllers/routes');

app.use('/', router).listen(process.env.PORT, (err) => {
	if(err) {
		console.log('Error: ', err);
	} else {
		console.log('Running on port ', process.env.PORT);
	}
});