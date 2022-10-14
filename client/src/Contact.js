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
                  console.log(error.response);
                  //setErr(error.response.data.replace("contact validation failed:","").split(",",50));
                  const Err = error.response.data.replace("contact validation failed:","").replace("contactnumber","Contact Number");
                         console.log(Err)
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

          <div className="col-10 about-info">
            <h2 className="title-left">Contact Information</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <ul className="about-cont">
            <li>
              <a href="tel:+91-80-23497464">
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
          </div>
          </div>
        </div>
    </section>

<br />
<section className="s-contacts s-main-contacts" >
      <div className="container s-anim">
        <h2>Contact us</h2>
        <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        <form id='contactform' name="contactform" onSubmit={sendEnquiryDetails}>
          <ul className="form-cover" style={{padding:"0px"}}>
            <li className="inp-name"><input id="name" type="text" name="yourname" placeholder="Name" style={{color:"black"}} /></li>
            <li className="inp-phone"><input id="phone" type="tel" name="yourphone" placeholder="Phone"  style={{color:"black"}} /></li>
            <li className="inp-email"><input id="email" type="email" name="youremail" placeholder="E-mail" style={{color:"black"}}  /></li>
            <li className="inp-text"><textarea id="comments" name="yourtext" placeholder="Message" style={{color:"black"}} ></textarea></li>
          </ul>
          <div className="checkbox-wrap">
            <div className="checkbox-cover">
              <input type="checkbox" />
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


<section >
        <Footer />  
        </section>


      <ToastContainer />



</div>
  );
}

export default Contact;



