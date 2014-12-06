var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title : {type:String,index : true,unique: true},
	desc : {type:String},
	tag : {type : String,index : true},
	content : {type : String,unique: true},
	time : {type : Date}
});

mongoose.model('Article', ArticleSchema);