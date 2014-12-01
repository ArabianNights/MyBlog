var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function route(err,req, res, next){
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: app.get('env') === 'development'?err:{}
	});
});

module.exports = router;