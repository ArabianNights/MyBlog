var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
	adminName : {type:String,unique: true},
	password : {type:String,unique: true},
	nickname : {type:String,unique: true}
});

mongoose.model('Admin', AdminSchema);