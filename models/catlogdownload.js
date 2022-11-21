const mongoose = require("mongoose");

const catlogdownloadSchema = new mongoose.Schema({
    username: { type: String, required: true},
    contactnumber: { type: Number, required: true },
    email: { type: String, required: true },
    productname:{type:String,required:true}
});

module.exports = mongoose.model("catlogdownload",  catlogdownloadSchema);