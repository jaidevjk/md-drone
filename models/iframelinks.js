const mongoose = require('mongoose');

const iframelinksScheme = new mongoose.Schema({
	link:{type:String,require:true},
	date: { type: String, default:new Date().toLocaleDateString()},
    time:{type:String,default:new Date().toLocaleTimeString()}
});
module.exports = mongoose.model('iframelinks',iframelinksScheme);