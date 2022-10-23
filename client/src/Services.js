import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';
import Services_Carousel from './Carousels/Services_Carousel';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function Services() {
  const [err,setErr] =useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setErr([])};
  const handleShow = () => setShow(true);

      const navigate = useNavigate();

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
                  //navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  setShow(false);
                  //console.log(typeof response.data.contactnumber);
                  setErr([]);
                    //.log(err);
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  // setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
                .finally(()=>{
                  
                })


          }

  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
<br />
<section className="s-discount-program mask" style={{backgroundImage:"url(img/bg-4.jpg)"}}>
      <div className="container">
        <section className="techspecs">
          <div className="container" style={{textAlign:"center"}}>
            <div className="overviewinfo" style={{textAlign:"",display:"flex",flexWrap:"wrap",alignItems:"center"}}>
            <div style={{textAlign:"center",minWidth:"auto",margin:"auto"}}><p style={{color:"#fff",textAlign:"justify",}}>
                Finding a problem to find skilled Labour?
                <br />
                Difficult to manage the pest control?
                <br />
                Difficult to give spray at correct time?
              </p></div>
              
            </div>
            <div className="overviewtitle" style={{textAlign:"",display:"flex",flexWrap:"wrap",alignItems:"center"}}>
             <div style={{textAlign:"center",minWidth:"auto",margin:"auto"}}>
              <p style={{color:"#fff",textAlign:"justify"}}>Don't worry!
                Multiplex Drone Pvt Ltd is eager to make farmers happy</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{width:"100%", textAlign: "center",display:"flex",flexWrap:"wrap",alignItems:"center"}}>
          <div className="servicestitle" style={{textAlign:"center",minWidth:"auto",margin:"auto"}}>
            <p className="" style={{color:"#fff",textAlign:"justify",}}>1. Fill out the form or call to +91-9591999044<br /><br />
            2. Our experienced team will reach the location<br/><br />
            3. Site Inspection and our team complete the work<br/><br />
            4. Smiles on the farmer face
            </p><br/><br />
            <button className="quiry-btn" onClick={() => setShow(true)}>enquire now</button>            
          </div>
            
        </div>
        
      </div>
</section><br />

<section className="s-we-offer" style={{margin:"0px",paddingTop:"0px",paddingBottom:"0px",marginBottom:"0px"}}>
      <div className="container">
        <h2>Services we offer</h2>
        <div className="row we-offer-cover">
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/img-serv-1.jpg" alt="img" />
            </div>
            <div className="offer-item-content" style={{textAlign:"justify"}}>
              <h4 className="title-line-left">spray</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris nisi</a> ut aliquip ex ea
                commodo consequat.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/img-serv-2.jpg" alt="img" />
            </div>
            <div className="offer-item-content" style={{textAlign:"justify"}}>
              <h4 className="title-line-left">crop health monitoring</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris nisi</a> ut aliquip ex ea
                commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
</section>
<br />
<section className="new-product" style={{paddingTop:"0px",marginTop:"0px"}}>
      <div className="container" style={{paddingTop:"0px",marginTop:"0px"}}>
        <h2 style={{paddingTop:"0px",marginTop:"0px"}}>testimonials</h2>
        <Services_Carousel />
      </div>
    </section>





<br /><section >
        <Footer />  
        </section>


<Modal
      show={show} onHide={handleClose}
      style={{paddingTop:'5px'}}
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
            <input type="tel" name="yourphone" placeholder="Phone"  style={{color:"black",padding:"5px"}} pattern="[0-9]{10}" required/>
            <lable>Email</lable><br/>
            <input  type="email" name="youremail" placeholder="Email" style={{color:"black",padding:"5px"}} required />
            <lable>Place</lable><br/>
            <input  type="text" name="yourplace" placeholder="Place" style={{color:"black",padding:"5px"}} required/>         
              
            <lable>Description</lable>
            <textarea  name="yourtext" placeholder="Message" style={{color:"black",padding:"5px"}} required></textarea>


            <button className="btn"  style={{marginTop:"10px",background:"#1da912",color:"#fff"}}>SUBMIT</button>
        </form>
                         
      </Modal.Body>
         
    </Modal>
      <ToastContainer />



</div>
  );
}

export default Services;



