const Iframelinks = require('../models/Iframelinks');

const createIframelinks = async(req,res)=>{

const newIframelinks = new Iframelinks({
        link:req.body.link
    });
    newIframelinks.save((error)=>{
        if(error)
        {
            res.json({status:0,debug_data:error});
        }
        else{
            { id: newIframelinks._id }
            res.json({
                                    newIframelinks: {
                                        id: newIframelinks._id,
                                        
                                    }
                                });
            // res.json({status:1,data:"newIframelinks created"}
            //     );
            console.log(res.data);
        }
    })


}


const fetchIframelinks = async(req,res)=>{
    Iframelinks.find((error,iframelinks_list)=>{
    	if(error){
    		res.send("Something went wrong")
    	} else{
    		res.json({data:iframelinks_list})
    	}
    })


}

const deleteIframelinks = async (req, res) => {
  const id = req.params.id;
  console.log("delete");
  try {
    await Iframelinks.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};



module.exports = {createIframelinks,fetchIframelinks,deleteIframelinks}