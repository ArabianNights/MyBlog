var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VisitorSchema = new Schema({
	visitorName : {type:String,unique: true},
	password : {type:String,unique: true},
	nickname : {type:String,unique: true},
	profile_image_url: {type: String}
});

mongoose.model('Visitor', VisitorSchema);