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
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Contact() {
  const [err,setErr] =useState([]);

      const navigate = useNavigate();

const sendEnquiryDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,

          }
          // console.log(objectOb);
          await axios
                .post('http://localhost:4003/contactusenquiry', objectOb)
                .then((response) => {
                  //navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                                  
                    e.target.yourname.value="";
                    e.target.yourphone.value='';
                    e.target.youremail.value="";
                    e.target.yourtext.value='';

                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response);
                  //setErr(error.response.data.replace("contact validation failed:","").split(",",50));
                  const Err = error.response.data.replace("contact validation failed:","").replace("contactnumber","Contact Number");
                         //console.log(Err)
                  toast.error(Err,{position: "top-center",});

                 })
                .finally(()=>{
                  
                })


          }

  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
<br />


<section className="about-top" style={{textAlign:" justify",paddingTop:"0px",paddingBottom:"0px"}}>
      <div className="container">
        <div className="row about-top-cover" style={{textAlign:" justify",paddingTop:"0px",paddingBottom:"0px"}}>
          <div className="col-10 ">
          </div>

          <div className="col-10 about-info" style={{textAlign: "center"}}>
            <h3 className="title-left" style={{color: "black", textAlign: "center"}}>Contact Information</h3>
            <h6 style={{color: "black"}}>Head Office</h6>
          <p>No.50/1, Manasanagar, Nagarbhavi,
Bangalore-560072</p>
             
          <ul className="about-cont" style={{textAlign: "center",paddingTop:"0px"}}>
            <li style={{textAlign: "center"}}>
              <a href="tel:+91-80-23497464" style={{textAlign: "left"}}>
                <i className="fa fa-phone" aria-hidden="true" style={{color:"black"}}></i>
                <span>+91-80-23497464</span>
              </a>
            </li>
            <li>
              <a href="mailto:corporate@multiplexdrone.com">
                <i className="fa fa-envelope" aria-hidden="true" style={{color:"black"}}></i>
                <span>corporate@multiplexdrone.com</span>
              </a>
            </li>
          </ul>
           {//<div className='row map'>
          //     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.169726426076!2d77.51469591464506!3d12.960988890862854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5e2bc26925%3A0xb5274ccd5d4d87ed!2sMultiplex%20Drone%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1666506981679!5m2!1sen!2sin"   
          //                  allowfullscreen="allow" 
          //                  loading="lazy" 
          //                  referrerpolicy="no-referrer-when-downgrade"
          //                  style={{border:"solid green 1px",padding:"6px"}}
          //                  className='col'
          //                  ></iframe>
          //    </div> 
                     }   
          </div>
          </div>
        </div>



<div className="container" style={{ margin: "3rem auto",}}>
          <div className="row" style={{padding:"0px"}}>
            <div className="col-10 col-sm-6 col-md-5 map1" style={{}}>
              <iframe
                src="https://www.google.cm/maps/embed?pb=!1m18!1m12!1m3!1d3888.169726426076!2d77.51469591464506!3d12.960988890862854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5e2bc26925%3A0xb5274ccd5d4d87ed!2sMultiplex%20Drone%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1666506981679!5m2!1sen!2sin"
                width="100%"
                
                 style={{border:"solid green 1px",padding:"6px"}}
              ></iframe>
            </div>

            <div className=" col-10 col-sm-6 col-md-6 content_flow" style={{}}>

              <ul className="list-group list-group-flush">

                <li className="list-group-item">

                 <h2 style={{color:"black",fontSize:"20px",paddingTop:"0px",}}>Head Office
                 <h6 style={{color:"black"}}>Karnataka,Bengaluru</h6>
                 </h2>
                 
                 <p className="fw-4" style={{  }}>
                    <b>Address:</b> 1192, 4th Main Rd, 2nd Block, Govindaraja Nagar Ward, Chalukya Nagar, Vijayanagar, Bengaluru, Karnataka 560072
                    <br />
                    <a href="tel:080 2349 7464">
                      <b>Phone:</b>
                      <span> 080 2349 7464</span>
                    </a>
                    <br />
                     {//<a href="mailto:kurnool@multiplexgroup.com">
                    //                       <b>
                    //                         Email: <span>kurnool@multiplexgroup.com</span>
                    //                       </b>
                    //                     </a>
                  }
                  </p> 
                </li>
              <li className="list-group-item">

                 <h2 style={{color:"black",fontSize:"20px",paddingTop:"0px",}}>Branch Office
                 <h6 style={{color:"black"}}>Mahalakshmi Layout,Bengaluru</h6>
                 </h2>
                 
                 <p className="fw-4" style={{  }}>
                    <b>Address:</b> 180, 1st A Main Rd, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086
                    <br />
                    <a href="tel:08518 - 259460">
                      <b>Phone:</b>
                      <span> 08518 - 259460</span>
                    </a>
                    <br />
                    {
                      // <a href="mailto:kurnool@multiplexgroup.com">
                      //                     <b>
                      //                       Email: <span>kurnool@multiplexgroup.com</span>
                      //                     </b>
                      //                   </a>
                                      }
                  </p> 
                </li>
                <li className="list-group-item">

                 <h2 style={{color:"black",fontSize:"20px",paddingTop:"0px",}}>Branch Office
                 <h6 style={{color:"black"}}>Karnataka,Bengaluru</h6>
                 </h2>
                 
                 <p className="fw-4" style={{  }}>
                    <b>Address:</b> Plot No.1,2,3, B&S Complex, Beside SBH Bank,
                    Gurubrahma Nagar, Bellary Road, Kurnool – 518 003
                    <br />
                    <a href="tel:08518 - 259460">
                      <b>Phone:</b>
                      <span> 08518 - 259460</span>
                    </a>
                    <br />
                    {
                      // <a href="mailto:kurnool@multiplexgroup.com">
                      //                     <b>
                      //                       Email: <span>kurnool@multiplexgroup.com</span>
                      //                     </b>
                      //                   </a>
                                      }
                  </p> 
                </li>

                
              </ul>
              </div>
              </div>
              </div>




    </section>

<section className="s-contacts s-main-contacts" style={{}}>
      <div className="container ">
        <h2>Contact us</h2>
        <form id='contactform' name="contactform" onSubmit={sendEnquiryDetails}>
          <ul className="form-cover" style={{padding:"0px"}}>
            <li className="inp-name"><input  type="text" name="yourname" placeholder="Name" style={{color:"black"}} required/></li>
            <li className="inp-phone"><input  type="tel" name="yourphone" placeholder="Phone"  style={{color:"black"}} pattern="[0-9]{10}"  required/></li>
            <li className="inp-email"> <input type="email" name="youremail" placeholder="Email" style={{color:"black"}}required /></li>
            <li className="inp-text"><textarea  name="yourtext" placeholder="Message" style={{color:"black"}} required></textarea></li>
          </ul>
          <div className="checkbox-wrap">
            <div className="checkbox-cover">
              <input type="checkbox" required/>
              <p style={{color: "#000"}}>By using this form you agree with the storage and handling of your data by this website.</p>
            </div>
          </div>
          <div className="btn-form-cover">
            <button className="quiry-btn">Submit</button>
          </div>
        </form>
        <div id="message"></div>
      </div>
    </section>

<br />
<section >
        <Footer />  
        </section>


      <ToastContainer />

<a
        href="https://wa.me/919591999044"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 20, right: 30, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>

</div>
  );
}

export default Contact;



//https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.169726426076!2d77.51469591464506!3d12.960988890862854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5e2bc26925%3A0xb5274ccd5d4d87ed!2sMultiplex%20Drone%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1666506981679!5m2!1sen!2sin
//https://www.google.com/maps/d/u/0/embed?mid=1Sos7sKxu9K38eJmPPZHXs_psepuc4Ws&ll=12.984410629256818%2C77.532668&z=14