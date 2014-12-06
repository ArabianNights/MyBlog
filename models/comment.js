var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	previouscomment_id : {type:ObjectId},
	visitor_id : {type : ObjectId,unique: true},
	article_id : {type : ObjectId,unique: true},

	content : {type : String,unique: true},
	time : {type : Date}
});

mongoose.model('Comment', CommentSchema);