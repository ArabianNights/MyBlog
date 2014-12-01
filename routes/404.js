var express = require('express');
var router = express.Router();

//配置404
router.use(function route(req, res, next){
	var err = new Error('Page not found');
	err.status = 404;
	//TODO 处理404
	res.render("404");
});


module.exports = router;