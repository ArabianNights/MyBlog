var express = require('express');
var router = express.Router();

var index = require('./index');
var route404 = require('./404');
var error = require('./error');

//配置路由需要注意顺序,404和error要放在最后面
//首页
router.use(index);
//404配置
router.use(route404);
//异常配置
router.use(error);

module.exports = router;