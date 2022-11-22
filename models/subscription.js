const mongoose = require('mongoose');

const subscriptionScheme = new mongoose.Schema({
	email:{type:String,require:true}
});
module.exports = mongoose.model('subscription',subscriptionScheme);