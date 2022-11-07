import React,{useState,useCallback} from 'react';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';

import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';


function TrainingRegistration() {
 
const RegisteredDetails=(e)=>{
  e.preventDefault(0);
  let object={
    name:e.target.name.value,
  }
  console.log(object);
  alert("got it");
}

  return (
    <div className="">
    <ResponsiveAppBar/>


<div className="container">

                <div className="row py-4 justify-content-center">
                    <div className="col-lg-11">
                        <div className="featured-box featured-box-primary text-left mt-0" style={{backgroundColor: "gainsboro",paddingBottom:"10px"}}>
                            <div className="box-content">

                                <div className="overflow-hidden mb-1">
                                    <h2 className="font-weight-normal text-7 mt-2 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200"><strong className="font-weight-extra-bold">Register For Training</strong></h2>
                                </div>

                                <form id="contactForm" className="contact-form" onSubmit={RegisteredDetails}  enctype="multipart/form-data" style={{margin:"20px",textAlign:"justify",color:"black"}}>
                                    

                                    <div className="form-row row">
                                      <div className="form-group col-sm-4 col-md-4 col-lg-4">
                                            <label className="required font-weight-bold text-dark text-2" style={{}}>Full Name</label>
                                            <input type="text"   maxlength="100" className="form-control" name="name" id="name" required style={{color:"black"}} />
                                        </div>
                                        <div className="form-group col-sm-4 col-md-4 col-lg-4">
                                            <label className="required font-weight-bold text-dark text-2">Email Address</label>
                                            <input type="email"    maxlength="100" className="form-control" name="email" id="email" required style={{color:"black"}} />
                                        </div>
                                        <div className="form-group  col-sm-4 col-md-4 col-lg-4">
                                            <label className="required font-weight-bold text-dark text-2">Phone</label>
                                            <input type="tel"   maxlength="10" pattern="[0-9]{10}" className="form-control" name="phone" id="phone" required style={{color:"black"}}/>
                                        </div>
                                    </div>
                                    <div className="form-row row">
                                        <div className="form-group col-12">
                                            <label className="required font-weight-bold text-dark text-2">Address</label>
                                            <textarea maxlength="5000" rows="8" className="form-control" name="address" id="address" required></textarea>
                                        </div>
                                    </div>
                                    <div className="form-row row">
                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Highest Qualification</label>
                                            <input type="text"   maxlength="100" className="form-control" name="qualification" id="qualification" required style={{color:"black"}}/>
                                        </div>
                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Specialization</label>
                                            <input type="text"   maxlength="100" className="form-control" name="specialization" id="specialization" required style={{color:"black"}}/>
                                        </div>
                                    </div>
                                    <div className="form-row row">
                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Nationality</label>
                                            <input type="text"  maxlength="100" className="form-control" name="nationality" id="nationality" required style={{color:"black"}}/>
                                        </div>
                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Upload your Aadhar or Passport Copy</label>
                                            <input className="d-block" type="file" name="fileToUpload" id="fileToUpload" required />
                                        </div>  
                                    </div>


                                    <div className="form-row row">
                                        <div className="form-group col">
                                            <label className="required font-weight-bold text-dark text-2">Training Level</label>
                                            <select className="form-control" name="training_level" id="training_level" required>
                                                <option >Select a Training Level</option>
                                                <option value="Small Category Multirotor Drone Pilot Course"> Small Category Multirotor Drone Pilot Course </option>
                                                <option value="Agriculture Drone Pilot Course"> Agriculture drone pilot course </option>
                                            </select>
                                        </div>
                                    </div>
                                      <br />
                                    <div className="form-row row">
                                        <div className="form-group col">
                                            <button type="submit" name="submit" className="btn btn-primary btn-modern" value="Book Now" data-loading-text="Loading...">Book Now</button>
                                        </div>
                                    </div>
                                </form>

                                 {
                                  //<div className="" style={{textAlign:"justify",margin:"20px"}}>
                                //                                     <h4 className="text-dark">Note :</h4>
                                //                                  <ul style={{listStyleType: "decimal"}}>
                                //                                         <li className="text-dark">Accommodation available (350 INR/head) <a href="#" data-toggle="modal" data-target="#exampleModal1"><b><i>View Rooms</i></b></a></li>
                                //                                         <li className="text-dark">Any valid government ID card is compulsory (ex: aadhar, voter ID, passport etc.)</li>
                                //                                     </ul>
                                //                                 </div>
                              }

                                <div className="mt-4" style={{textAlign:"justify",margin:"20px"}}>
                                    <h4 className="text-dark">Eligibility :</h4>
                                    <ul style={{listStyleType: "decimal"}}>
                                        <li className="text-dark">Age should be 17+</li>
                                        <li className="text-dark">Should have completed className 10 or equivalent</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        


    
     <Footer />
      </div>
   
  );
}

export default TrainingRegistration;

        //            <img className="lazy" src="img/img-2.jpg" alt="img" />
