const CatlogDownload = require("../models/catlogdownload.js");
const path = require('path');
const fs = require('fs');
let completePath = path.join(__dirname+"/../views/catlogs/");

exports.createCatlogDownload = async (req, res) => {
  const catlogdownload = req.body;
   const { productname } = req.body;
  //console.log(catlogdownload);

  try {
    
    const newCatlogDownload = new CatlogDownload(catlogdownload);
    await newCatlogDownload.save();
    //console.log(completePath+`${productname}.pdf`)
    res.download(completePath+`${productname}.pdf`)
      //res.send("got it")
  } catch (error) {
    console.log(error);
    res.status(409).json(error.message);
  }
};




exports.fetchCatlogDownload = async (req, res) => {
  const catlogDownload = await CatlogDownload.find();
  try {
    res.status(200).send(catlogDownload);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching CatlogDownload");
  }
};

exports.deleteCatlogDownload = async (req, res) => {
  const id = req.params.id;
  try {
    await CatlogDownload.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.catlogDownload = async (req, res) => {
  try {
  
    res.download(completePath);
  
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching CatlogDownload");
  }
};