const TestimonialS = require('../models/testimonials');

const createTestimonial = async(req,res)=>{

const newTestimonial = new TestimonialS({
        name: req.body.name,
        designation:req.body.designation,
        description:req.body.description ,
        img:req.body.img,
        
        
    });
    newTestimonial.save((error)=>{
        if(error)
        {
            res.json({status:0,debug_data:error});
        }
        else{
            { id: newTestimonial._id }
            res.json({
                                    newTestimonial: {
                                        id: newTestimonial._id,
                                        name: newTestimonial.name,
                                        designation: newTestimonial.designation
                                    }
                                });
            // res.json({status:1,data:"newTestimonial created"}
            //     );
            console.log(res.data);
        }
    })


}


const fetchTestimonial = async(req,res)=>{
    TestimonialS.find((error,testimonials_list)=>{
    	if(error){
    		res.send("Something went wrong")
    	} else{
    		res.json({data:testimonials_list})
    	}
    })


}

const deleteTestimonial = async (req, res) => {
  const id = req.params.id;
  console.log("delete");
  try {
    await TestimonialS.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};



module.exports = {createTestimonial,fetchTestimonial,deleteTestimonial}