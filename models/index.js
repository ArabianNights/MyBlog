var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect('mongodb://'+config.dbConfig.host+'/'+config.dbConfig.db,function(err){
	if(err){
		console.error('connect to %s error: %s',config.dbConfig.db,err.message);
		process.exit(1);
	}
});

//引入models
require('./admin');
require('./articles');
require('./comment');
require('./visitor');

//导出models,routes文件夹下的控制器可借此调用
exports.Admin = mongoose.model('Admin');
exports.Article = mongoose.model('Article');
exports.Comment = mongoose.model('Comment');
exports.Visitor = mongoose.model('Visitor');