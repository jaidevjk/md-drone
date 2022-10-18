import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import Collapse from 'react-bootstrap/Collapse';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Testimonial from './Carousels/testimonial_carousel/Testimonial';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';
 

  const style = {
};
    

function Home() {


  // const [inputs, setInputs] = useState({});
  const [err,setErr] =useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setErr([])};
  const handleShow = () => setShow(true);

const [spraysererr,setSprayserErr] =useState([]);
  const [showspray, setShowspray] = useState(false);
  const handleClosespray = () => {setShowspray(false);setSprayserErr([])};
  const handleShowspray = () => setShow(true);

  const navigate = useNavigate();

          const sendSprayServicesDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,
            place: e.target.yourplace.value,
            crop: e.target.yourcrop.value,
            acre: e.target.youracres.value
          }
          console.log(objectOb);
          await axios
                .post('http://localhost:4003/sprayservicesenquiry', objectOb)
                .then((response) => {
                  navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  setShowspray(false);
                  //console.log(typeof response.data.contactnumber);
                  setSprayserErr([]);
                    //.log(err);
                    
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  console.log(error.response)
                  //setSprayserErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
                .finally(()=>{
                  
                })
          }

          const sendEnquiryDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,
            place: e.target.yourplace.value,

          }
          console.log(objectOb);
          await axios
                .post('http://localhost:4003/enquiry', objectOb)
                .then((response) => {
                  navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  setShow(false);
                  //console.log(typeof response.data.contactnumber);
                  setErr([]);
                    //.log(err);
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  console.log(error.response)
                  setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
                .finally(()=>{
                  
                })


          }



  return (
<div className="" style={{margin:"0px"}}>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
  <div className="col-12" style={{padding:"10px"}} >
      <div style={{}}>
   
<video  autoPlay loop muted width="100%">
          <source src="landing-video.mp4" type="video/mp4"></source>
        </video>
        </div>
    </div> 
          <section className="s-shop" style={{padding:"0px"}}>
      <div className="container s-anim" style={{padding:"0px",}}>
        <h2  style={{padding:"0px"}}>INFOGRAPHICS</h2>

        <div className="tab-wrap" style={{padding:"0px",}}>
          <ul className="tab-nav prod-tabs" style={{padding:"10px"}}>
            <li className="item" rel="tab1">
              <div className="block-icon">
                <img src="img/icon-tab-2.svg" alt="img" />
                <h4>3+</h4><h6>Branches</h6>
                <div className="info-span" style={{color:"white"}}><span style={{display:"inline"}}><h4 style={{display:"inline",}}>3+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Branches</h6></span></div>
              </div>
            </li>
            <li className="item" rel="tab2">
              <div className="block-icon">
                <img src="img/icon-tab-111.svg" alt="img" />
                <h4>5+</h4>
                <h6>Drone Variants</h6>
                <div className="info-span" style={{color:"white"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>5+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Drone Variants</h6></span></div>

              </div>
            </li>
            <li className="item" rel="tab3">
              <div className="block-icon">
                <img src="img/icon-tab-6t.svg" alt="img" />
                <h4>30+</h4>
                <h6>Pilots</h6>
                <div className="info-span" style={{color:"white"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>30+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Pilot</h6></span></div>

              </div>
            </li>
            <li className="item" rel="tab4">
              <div className="block-icon">
                <img src="img/icon-tab-3.svg" alt="img" />
                <h4>5+</h4>
                <h6>Technicians</h6>
                <div className="info-span" style={{color:"white"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>5+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Technicians</h6></span></div>

              </div>
            </li>
            <li className="item" rel="tab5">
              <div className="block-icon">
                <img src="img/icon-tab-4.svg" alt="img" />
                <h4>5000+</h4>
                <h6>acres sprayed</h6>
                <div className="info-span" style={{color:"white"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>5000+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>acres</h6></span></div>

              </div>
            </li>
            <li className="item" rel="tab6">
              <div className="block-icon">
                <img src="img/icon-tab-6.svg" alt="img" />
                <h4>2500+</h4>
                <h6>farmers</h6>
                <div className="info-span" style={{color:"white"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>2500+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>farmers</h6></span></div>
                
              </div>
            </li>
          </ul>
</div>
    </div> 
    </section>
    <br />
    <section className="spray-drone" style={{padding:"10px"}}>

      <div className="box" style={{padding:"0px"}}>
        <div className="row align-items-center" style={{paddingTop:"0px",margin:"0px"}}>
          <div className="price-img-block col-md-6 col-sm-0" style={{padding:"0px",marginTop:"0px",height:"inherit"}}>
            <div className="price-img-cover" style={{padding:"0px"}}>
              <img className="lazy" src="img/best-img.jpg"  alt="img" height="555px" width="inherit" />
              <img className="price-drone " src="img/drone-1.png"  alt="img" style={{padding:"0px",margin:"0px"}}/>
            </div>
          </div>
          <div className=" col-md-6 " style={{textAlign: "left",padding:"4px"}}>
            <div className="price-info" style={{textAlign: "justify",padding:"20px"}} >
              <h1 style={{color:"#1da912"}} className="title-left">For Spray Services</h1>
              <p  className='sprayed' style={{color:"#fff"}}>Finding a problem to find skilled Labour?
                <br />
                Difficult to manage the pest control?
                <br />
                Difficult to give spray at correct time?
                <br />
                Don't worry!
                Multiplex Drone Pvt Ltd is eager to make farmers happy.
              </p>
             
            <button className="quiry-btn" onClick={() => setShowspray(true)}>book now</button>
            </div>
           
            <div className="price-info" style={{textAlign: "justify",padding:"20px"}}>
              <h1 style={{color:"#1da912"}} className="title-left">For Customized Drones</h1>
              <p className='sprayed' style={{color:"#fff"}}>Every drone is manufactured with carbon fibers and aerospace-grade materials with high precision and controlled with industrial-grade flight controllers. Enquire now for customized/agricultural drones.</p>
             
            <button className="quiry-btn" onClick={() => setShow(true)}>enquire</button>
            </div>
          </div>
        </div>
      </div>
    </section>

<div className="container s-anim" style={{width:"100%",textAlign:"center",marginBottom:"10px",paddingBottom:"50px"}}>
        <h2>our proucts</h2>
       

         <section className="serv-block" style={{margin:"5%",width:"90%"}}> 
        
          <a href="/md5q" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-1.jpg" alt="img" />
            <div className="serv-block-info">
              <h3>md 5q</h3>
              
              <span>read more</span>
            </div>
          </a>
          <a href="/md10q" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-2.jpg" alt="img" />
            <div className="serv-block-info">
              <h3>md 10q</h3>
              
              <span>read more</span>
            </div>
          </a>
          </section>
        <section className="serv-block" style={{margin:"5%",width:"90%"}}>
          <a href="/md16p" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-3.jpg" alt="img" />
            <div className="serv-block-info">
              <h3>md 16p</h3>
              <span>read more</span>
            </div>
          </a>
          <a href="/md10h" className="serv-block-item" style={{margin:"10px",width:"100%",height:"90%"}}>
            <span className="border-item"></span>
            <img className="lazy" src="img/img-4.jpg" alt="img" />
            <div className="serv-block-info">
              <h3>md 10h</h3>
              <span>read more</span>
            </div>
          </a>
        </section>
        </div>
<br />

<section className="s-blog" style={{padding: "0px"}}>
      <div className="container s-anim">
        <h2 style={{padding:" 0px",marginTop:"30px"}}>Our Clients</h2>
        <div className="row">
          <img className="clients" src="img/clients.png" alt="img" style={{padding: "0px",width: "100%"}} />
    </div>
    </div>
    </section>

<br />
<br />
<section className="s-blog" style={{marginBottom:"0px",padding:"0px",paddingBottom: "0px",backgroundColor:"none"}}>
      <div className="container s-anim">
        <h2>News & Events </h2>
        <div className="row" style={{padding:"1%",margin:"0px",width:"inherit"}}>

        
          <div className="col-12 col-md-4 col-sm-10 post-item" style={{padding:"1%",margin:"0px"}}>
            <div className="prod-thumbnail" style={{padding:"0%",margin:"0px"}}>
              <a><iframe className="lazy" src="https://www.youtube.com/embed/l1OVENpxFkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            </div>
            
          </div>
        
          <div className="col-12 col-md-4 col-sm-10 post-item" style={{padding:"1%",margin:"0px"}}>
            <div className="prod-thumbnail" style={{padding:"0%",margin:"0px"}}>
              <a><iframe className="lazy" src="https://www.youtube.com/embed/LiafM_WhQok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            </div>
            
          </div>

          <div className="col-12 col-md-4 col-sm-10 post-item" style={{padding:"1%",margin:"0px"}}>
            <div className="prod-thumbnail" style={{padding:"0%",margin:"0px"}}>
              <a><iframe className="lazy" src="https://www.youtube.com/embed/ZJUriaB6_3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            </div>
            
          </div>
        </div>
      </div>
    </section>

        <section style={{padding:"10px"}} >
          <div className="container s-anim">
            <h2>testimonials</h2>
            <Testimonial />
          </div>
        </section>
<br /><br /><br />

<section >
          <Footer />
        </section>
<Modal
      show={showspray} onHide={handleClosespray}
    > 
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Spray Services
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
        
          <form  className=""  name="contactform" onSubmit={sendSprayServicesDetails}>
            <label>Full Name</label>
            <input  type="text" name="yourname" placeholder="Name" style={{color:"black",padding:"5px"}} required/>         
            <lable>Contact Number</lable><br/>
            <input type="tel" name="yourphone" placeholder="Phone"  style={{color:"black",padding:"5px"}} required/>
            <lable>Email</lable><br/>
            <input  type="email" name="youremail" placeholder="Email" style={{color:"black",padding:"5px"}} required />
            <lable>Place</lable><br/>
            <input  type="text" name="yourplace" placeholder="Place" style={{color:"black",padding:"5px"}} required/>         
            <lable>Your Crop</lable><br/>
            <input  type="text" name="yourcrop" placeholder="Crop" style={{color:"black",padding:"5px"}} required/>
            <lable>Acres</lable><br/>
            <input type="text" name="youracres" placeholder=""  style={{color:"black",padding:"5px",}} required/>         
            <lable>Description</lable>
            <textarea  name="yourtext" placeholder="Message" style={{color:"black",padding:"5px"}} required></textarea>
{err.map((val)=>{ return(<div style={{color:"red",padding:"5px"}}>{val}</div>)
                          
                         })}

            <button className="btn"  style={{marginTop:"10px",background:"#1da912",color:"#fff"}}>SUBMIT</button>
        </form>
                         
      </Modal.Body>
         
    </Modal>
 

<Modal
      show={show} onHide={handleClose}
    > 
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Enter Enquiry Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
        
          <form  className=""  name="contactform" onSubmit={sendEnquiryDetails}>
            <label>Full Name</label>
            <input  type="text" name="yourname" placeholder="Name" style={{color:"black",padding:"5px"}} required/>         
            <lable>Contact Number</lable><br/>
            <input type="tel" name="yourphone" placeholder="Phone"  style={{color:"black",padding:"5px"}} required/>
            <lable>Email</lable><br/>
            <input  type="email" name="youremail" placeholder="Email" style={{color:"black",padding:"5px"}} required />
            <lable>Place</lable><br/>
            <input  type="text" name="yourplace" placeholder="Place" style={{color:"black",padding:"5px"}} required/>         
              
            <lable>Description</lable>
            <textarea  name="yourtext" placeholder="Message" style={{color:"black",padding:"5px"}} required></textarea>
{err.map((val)=>{ return(<div style={{color:"red",padding:"5px"}}>{val}</div>)
                          
                         })}

            <button className="btn"  style={{marginTop:"10px",background:"#1da912",color:"#fff"}}>SUBMIT</button>
        </form>
                         
      </Modal.Body>
         
    </Modal>
      <ToastContainer />                 
</div>
  );
}

export default Home;



