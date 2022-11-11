const mongoose = require("mongoose");

const catlogdownloadSchema = new mongoose.Schema({
    name: { type: String, required: true, max: 100 },
    contactnumber: { type: Number, required: true },
    email: { type: String, required: true },
    productname:{type:String,required:true}
});

module.exports = mongoose.model("catlogdownload",  catlogdownloadSchema);