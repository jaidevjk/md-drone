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
import Carousel from 'react-bootstrap/Carousel';
import Testimonial from './Carousels/testimonial_carousel/Testimonial';

function Training() {
const [err,setErr] =useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setErr([])};
  const handleShow = () => setShow(true);

      const navigate = useNavigate();



  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
 
<section className="s-we-offer">
      <div className="container">
        <h2>training</h2>
<div className="traininginfo">
          <p style={{ align: "center"}}> DGCA CERTIFIED TRAINING | COURSE IS FORMULATED AS PER DGCA CAR 1.0</p>
        </div>
        <div className="overviewtitle">
          <p className="color: #1da912; align: center;">Objectives of the Training</p>
          
        </div>
        <div className="overviewinfo">
          <p>• To promote the use of drones in various industries for various applications
            <br />
            • To understand facilities and services available in the drone industry
            <br />
            • To bring awareness about regulations and facts among engineers, journalists, survey professionals, power industry professionals, police, mining industry professionals, infrastructure and agriculture professionals, etc
            <br />
            • To educate about the emerging trends in the drone industry and developing technologies in drone production
            <br />
            • To know how to have more ROIs (Return on Investments) using drones
            <br />
            • To learn how to fly a Multirotor drone
          </p>
        </div>
        

        <div className="overviewtitle">
          <p className="color: #1da912;">What Students Will Get</p>
          
        </div>
         {
          //<div className="overviewinfo">
        //           <p>• Certification as a drone pilot from military qualified instructors
        //             <br />
        //             • The certificate will be titled - Diploma in Drone Technology in Multirotor Drone Pilot Course
        //             <br />
        //             • Drone Pilot Card
        //           </p>
        //           </div>
      }
      <div className="overviewinfo">
                  <p>• DGCA-certified Remote Pilot Certificate
                    <br />
                    • Validity – 10 years 
                    <br />
                    • Certification – DGCA 
                  </p>
                  </div>
        </div>
    </section>
   
    <section className="s-shop">
      <div className="container s-anim">
        <h2>Who Should Attend</h2>
 {     // <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
}
        <div className="tab-wrap">
          <ul className="tab-nav prod-tabs">
            <li className="item" rel="tab1">
              <div className="block-icon">
                <img src="img/photographer.svg" alt="img" />
                <h6>Photography <br />Professionals</h6>
              </div>
            </li>
            <li className="item" rel="tab2">
              <div className="block-icon">
                <img src="img/engineer.svg" alt="img" />
                <h6>Passionate Engineers</h6>
              </div>
            </li>
            <li className="item" rel="tab3">
              <div className="block-icon">
                <img src="img/forest.svg" alt="img" />
                <h6>Forest/Corporate Officers</h6>
              </div>
            </li>
            <li className="item" rel="tab4">
              <div className="block-icon">
                <img src="img/logistic.svg" alt="img" />
                <h6>Logistic  Experts</h6>
              </div>
            </li>
            <li className="item" rel="tab5">
              <div className="block-icon">
                <img src="img/builder.svg" alt="img" />
                <h6>Builders/Survey Officers</h6>
              </div>
            </li>
            <li className="item" rel="tab6">
              <div className="block-icon">
                <img src="img/dronepilot.svg" alt="img" />
                <h6>amateur Drone Pilots</h6>
              </div>
            </li>
          </ul>
          </div>

       </div>   
    </section>

<section className="s-banners" style={{paddingTop:"0px",}}>
      <div className="container s-anim" style={{marginBottom:"5%"}}>
        <h2>courses offered</h2>
        <div className="container" >
          <div className="row" >
             {
              //<div className="col-12 col-sm-12 col-md-6 train-banner">
            //               <div className="baner-item">
            //                 <img src="img/banner-1.jpg" alt="img" />
            //                 <div className="baner-item-content">
            //                   <h4>Micro Category Multirotor Drone Pilot Course</h4>
            //                   <br />
            //                   <p>Course deals with the explanation of technical aspects of drone, regulations, simulation and drone pilot training</p>
            //                   <a href="#" data-bs-toggle="modal" data-bs-target="#modal1" className="quiry-btn">read more</a>
            //                   <div className="banner-sale-cover">
            //                     <div className="banner-sale">Fees: 28,500 + 18% GST</div>
            //                     <p>Duration: 4 Days</p>
            //                   </div>
            //                 </div>
            //               </div>
            //             </div>
          }
            <div className="col-12 col-sm-12 col-md-6 train-banner">
              <div className="baner-item">
                <img src="img/smallcategory.jpg" alt="img" />
                <div className="baner-item-content">
                  <h4>Small Category Multirotor Drone Pilot Course</h4>
                  <br />
                  <p>Detailed teaching of technical aspects of drone, simulation, regulations and drone pilot training.</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal1" className="quiry-btn">read more</a>
                  <div className="banner-sale-cover">
                    <div className="banner-sale">Fees: 60,000 + 18% GST</div>
                    <p>Duration: 5 Days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 train-banner">
              <div className="baner-item">
                <img src="img/agriculturetrancourse.jpg" alt="img" />
                <div className="baner-item-content">
                  <h4>Agricultural Drone Pilot Course</h4>
                  <br />
                  <p>Course is enriched with technical aspects of drone, in detail explanation of DGCA regulations, simulation training and drone pilot training.</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal2" className="quiry-btn">read more</a>
                  <div className="banner-sale-cover">
                    <div className="banner-sale">Fees: 60,000 + 18% GST</div>
                    <p>Duration: 7 Days</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

<section className="s-team" style={{paddingTop:"0px",paddingBottom:"10px"}}>
      <div className="container" style={{}}>
        <h2>our instructors</h2>
 {
//         <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
}
        { 
        //          <div className="row">
       //           <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
       //             <div className="team-item instructors-team">
       //               <div className="team-img">
       //                 <img src="img/team-1.jpg" alt="" />
       //               </div>
       //               <div className="team-info">
       //                 <h6 className="name">Maj Gen RC Padhi</h6>
       //                 <div className="prof">Defence Mentor IID & Ex-Military Surveyor General</div>
       //               </div>
       //             </div>
       //           </div>
       //           <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
       //             <div className="team-item instructors-team">
       //               <div className="team-img">
       //                 <img src="img/team-1.jpg" alt="" />
       //               </div>
       //               <div className="team-info">
       //                 <h6 className="name">Ram Sarath Kumar</h6>
       //                 <div className="prof">Chief Operations Officer, IID</div>
       //               </div>
       //             </div>
       //           </div>
       //           <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
       //             <div className="team-item instructors-team">
       //               <div className="team-img">
       //                 <img src="img/team-1.jpg" alt="" />
       //               </div>
       //               <div className="team-info">
       //                 <h6 className="name">MS Prasad</h6>
       //                 <div className="prof">Chief Patron IID & Ex DRDO Scientist G</div>
       //               </div>
       //             </div>
       //           </div>
       //           <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
       //             <div className="team-item instructors-team">
       //               <div className="team-img">
       //                 <img src="img/team-1.jpg" alt="" />
       //               </div>
       //               <div className="team-info">
       //                 <h6 className="name">Cyril Christopher</h6>
       //                 <div className="prof">Sr Research & Development Engineer - Aeronautics</div>
       //               </div>
       //             </div>
       //           </div>
       //           <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
       //             <div className="team-item instructors-team">
       //               <div className="team-img">
       //                 <img src="img/team-1.jpg" alt="" />
       //               </div>
       //               <div className="team-info">
       //                 <h6 className="name">Lt Cdr John Livingstone</h6>
       //                 <div className="prof">Executive Director IID & Ex-Military UAV Pilot</div>
       //               </div>
       //             </div>
       //           </div>
       //           <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
       //             <div className="team-item instructors-team">
       //               <div className="team-img">
       //                 <img src="img/ShivakumarHG1.jpg"  alt="" height="inherit" alt=""style={{width:"100%",height: "inherit"}}/>
       //               </div>
       //               <div className="team-info">
       //                 <h6 className="name">Shivakumar H G</h6>
       //                 <div className="prof">Head (Operations &Technical) of MDPL & IID Certified Multirotor Drone Instructor</div>
       //               </div>
       //             </div>
       //           </div>
       //         </div>
        }




 <div className="row">
                 <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/AdityaAR.png" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Adithya AR</h6>
                       <div className="prof">Asst. Manager – Operations </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/AnupKumar.jpg" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Anup Kumar Yemme</h6>
                       <div className="prof">Asst. Manager – Product Development</div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/Mithun.jpg" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Mithun SK</h6>
                       <div className="prof">Manager – NPD Certified Trainer</div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/team-1.jpg" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Cyril Christopher</h6>
                       <div className="prof">Sr Research & Development Engineer - Aeronautics</div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/team-1.jpg" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Lt Cdr John Livingstone</h6>
                       <div className="prof">Executive Director IID & Ex-Military UAV Pilot</div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-4 col-xl-2 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/ShivakumarHG1.jpg"  alt="" height="inherit" alt=""style={{width:"100%",height: "inherit"}}/>
                     </div>
                     <div className="team-info">
                       <h6 className="name">Shivakumar H G</h6>
                       <div className="prof">Head (Operations &Technical) of MDPL & IID Certified Multirotor Drone Instructor</div>
                     </div>
                   </div>
                 </div>
               </div>




      </div>
    </section>
    <div className="container" style={{}}>
    <div className="row">
    <h6 style={{color:"black"}}>Multiplex Drone Multirotor Drone Training Centre</h6>
    <div className="col-10  map" style={{}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8562395122153!2d77.35481141464605!3d13.044821290807855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae31fdf6fe7f67%3A0xae2ce345ca8af144!2sMultiplex%20Drone%20Multirotor%20Drone%20Pilot%20Training%20Centre!5e0!3m2!1sen!2sin!4v1667621531451!5m2!1sen!2sin"
                width="100%"
                
                 style={{border:"solid green 1px",padding:"6px"}}
              ></iframe>
            </div>
            </div>
            </div>
            <br />
 {
            //<section>
// <div className="container" style={{}}>
// <div className="row text-center pb-5" style={{backgroundColor:"#282b32",padding:"10px",border:"solid green 3px"}}>
//                             <div className="col-12 mx-md-auto">
//                                 <div className="overflow-hidden mb-3">
//                                     <h2 className="word-rotator slide font-weight-bold text-8 text-white mb-0">
//                                         <span>Photos</span>
//                                     </h2>
//                                 </div>
                                
//                                     <div className="row mx-0 justify-content-center">
//                                         <div className="col-md-6 col-lg-6">
//                                             <h4>2021 Batch</h4>
//                                             <Carousel  indicators={false} controls={false}>
//                                                <Carousel.Item interval={1000}>
//                                                <img className="lazy d-block w-100" src="img/img-1.png" alt="img" />
//                                                <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>January 2021</b></div> 
//                                                </Carousel.Item>
//                                                <Carousel.Item interval={1000}>
//                                                <img className="lazy d-block w-100" src="img/img-22.png" alt="img" />
//                                                <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>October 2021</b></div>
//                                                 </Carousel.Item>
//                                                 <Carousel.Item interval={1000}>
//                                                <img className="lazy d-block w-100" src="img/img-33.png" alt="img" />
//                                                <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>November 2021</b></div>
                                               
//                                                 </Carousel.Item>
//                                             </Carousel> 
//                                       </div>

//                                       <div className="col-md-6 col-lg-6">
//                                             <h4>2020 Batch</h4>
//                                             <Carousel fade indicators={false} controls={false}>
//                                                <Carousel.Item interval={1000}>
//                                                <img className="lazy d-block w-100" src="img/chotabheem1.png" alt="img" alt="img" />
//                                                <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>January 2020</b></div> 
//                                                </Carousel.Item>
//                                                <Carousel.Item interval={1000}>
//                                                <img className="lazy d-block w-100" src="img/img-44.png" alt="img" />
//                                                <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>October 2020</b></div>
//                                                 </Carousel.Item>
//                                                 <Carousel.Item interval={1000}>
//                                                <img className="lazy d-block w-100" src="img/bheem.png" alt="img" alt="img" />
//                                                <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>November 2020</b></div>
                                               
//                                                 </Carousel.Item>
//                                             </Carousel> 
//                                       </div>

                                        
                  


                                        
//                                     </div>
                                
//                             </div>
//                         </div>




// </div>
// </section>
}



            <section>
<div className="container" style={{}}>
<div style={{padding:"10px",paddingLeft:"5px",border:"solid green 2px"}}>
<div className="row text-center pb-5" style={{backgroundColor:"#282b32",marginRight:"5px",marginLeft:"5px"}}>
                            <div className="col-12">
                                <div className="overflow-hidden mb-3">
                                    <h2 className="word-rotator slide font-weight-bold text-8 text-white mb-0">
                                        <span>Photos</span>
                                    </h2>
                                </div>
                                </div>
                                    
                                        <div className="col-md-5 col-lg-5">
                                            <h4>2021 Batch</h4>
                                            <Carousel  indicators={false} controls={false}>
                                               <Carousel.Item interval={1000}>
                                               <img className="lazy d-block w-100" src="img/img-1.png" alt="img" />
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>January 2021</b></div> 
                                               </Carousel.Item>
                                               <Carousel.Item interval={1000}>
                                               <img className="lazy d-block w-100" src="img/img-22.png" alt="img" />
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>October 2021</b></div>
                                                </Carousel.Item>
                                                <Carousel.Item interval={1000}>
                                               <img className="lazy d-block w-100" src="img/img-33.png" alt="img" />
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>November 2021</b></div>
                                               
                                                </Carousel.Item>
                                            </Carousel> 
                                      </div>

                                      <div className="col-md-5 col-lg-5">
                                            <h4>2020 Batch</h4>
                                            <Carousel fade indicators={false} controls={false}>
                                               <Carousel.Item interval={1000}>
                                               <img className="lazy d-block w-100" src="img/chotabheem1.png" alt="img" alt="img" />
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>January 2020</b></div> 
                                               </Carousel.Item>
                                               <Carousel.Item interval={1000}>
                                               <img className="lazy d-block w-100" src="img/img-44.png" alt="img" />
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>October 2020</b></div>
                                                </Carousel.Item>
                                                <Carousel.Item interval={1000}>
                                               <img className="lazy d-block w-100" src="img/bheem.png" alt="img" alt="img" />
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>November 2020</b></div>
                                               
                                                </Carousel.Item>
                                            </Carousel> 
                                      </div>

                            
                        </div>

</div>


</div>
</section>




<section>
<div className="container">
<div className="row justify-content-center pb-0">
                            <div className="col-12 mx-md-auto my-4">
                                <div className="overflow-hidden mb-3">
                                    <h2 className="word-rotator slide font-weight-bold text-8 mb-0 text-center">
                                        <span>Our Training</span>
                                    </h2>
                                </div>
                                <div className="container">
                                    <div className="row mx-0 justify-content-center">
                                        <div className="col-md-6 col-12 mb-2">
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/dFem6iSu1Qk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <div className="col-md-6 col-12 mb-2">
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4vvBL0DdvE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <div className="col-md-6 col-12 mb-2">
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/DxLjcDnS0r0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <div className="col-md-6 col-12 mb-2">
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/M-1wxB8_yYU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>

                            </div>
</div>
 </div>
        </section>

    <section style={{padding:"10px"}} >
          <div className="container ">
            <h2>testimonials</h2>
            <Testimonial />
          </div>
        </section>
 


<section >
        <Footer />  
        </section>

 <ToastContainer />

<a
        href="https://wa.me/916362900041"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: 10, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>

 {
  // ------Modals start------
  }
<div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Drone Pilot Training</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
      <h2 className=" font-weight-bold text-capitalize" style={{padding:"0px",}}>Agricultural Drone Pilot Course</h2>
                                           
      <img src='img/agriculturetrancourse.jpg' style={{width:"100%"}}/><br /><br />



                             
                        <p className="text-justify"><b>Course Highlights</b> <br />Detailed teaching of technical aspects of drone, simulation, regulations and drone pilot training.</p>

                       <p> <b>Duration :</b> 5 Days<br />
                        <b>Fees :</b> 60,000 + 18% GST<br />
                        <b>Training Queries :</b><i className="fa fa-phone" aria-hidden="true" style={{margin:" 0px 10px"}}></i><span>6362900041</span> </p>
                        
                        <h4 className="" style={{color:"black"}}>Syllabus covered</h4>
                        <table className="table table-striped table-bordered">

                            <thead className="bg-primary text-white">
                                <tr>
                                    <th>Day</th>
                                    <th>Program</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 1</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Regulations of DGCA</p>
                                        <p className="text-dark font-weight-bold mb-2">Basic principles of Flight </p>
                                        <p className="text-dark font-weight-bold mb-2">Introduction to Multirotor</p>
                                        <p className="text-dark font-weight-bold mb-2">Drone Equipment Maintenance</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 2</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Emergency Identification and Handling</p>
                                        <p className="text-dark font-weight-bold mb-2">Payload Installation and Utilization</p>
                                        <p className="text-dark font-weight-bold mb-2">Image and Video Interpretation</p>
                                        <p className="text-dark font-weight-bold mb-2">Introduction to Flight Simulator</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 3</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Flight Simulator Training</p>
                                        <p className="text-dark font-weight-bold mb-2">Assembling and De-assembling of Drones</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 4</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Practical Flying with Instructor Supervision</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 5</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Solo Flying </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 6</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Agriculture Drone Flying</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 7</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Final Test (Theory and Practical)</p>
                                    </td>
                                </tr>
                            </tbody>
            </table>

<h4>Certificate</h4>
            <p className="text-dark lead text-justify">At the end of the Training Course, a certificate will be presented to the participants who have attended all the sessions of the Training Course. The certificate will be titled, <b>"Diploma in Drone Technology for completing 'MULTIROTOR DRONE/UAV PILOT COURSE"</b></p>
                    <div style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  style={{background:"green"}} onClick={()=>{navigate("/trainingregistering")}}>Enroll Now</button>

                    </div>
                    </div>
                    
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"100%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"55%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Drone Pilot Training</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
      <h2 className=" font-weight-bold text-capitalize" style={{padding:"10px",}}>Small Category Multirotor Drone Pilot Course</h2><br />
                                           
      <img src='img/smallcategory.jpg' style={{width:"100%"}}/><br /><br />



                             
                        <p className="text-justify"><b>Course Highlights</b> <br />Detailed teaching of technical aspects of drone, simulation, regulations and drone pilot training.</p>

                       <p> <b>Duration :</b> 5 Days<br />
                        <b>Fees :</b> 60,000 + 18% GST<br />
                        <b>Training Queries :</b><i className="fa fa-phone" aria-hidden="true" style={{margin:" 0px 10px"}}></i><span>6362900041</span> </p>
                        
                        <h4 className="" style={{color:"black"}}>Syllabus covered</h4>
                        <table className="table table-striped table-bordered">

                            <thead className="bg-primary text-white">
                                <tr>
                                    <th>Day</th>
                                    <th>Program</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 1</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Regulations of DGCA</p>
                                        <p className="text-dark font-weight-bold mb-2">Basic principles of Flight </p>
                                        <p className="text-dark font-weight-bold mb-2">Introduction to Multirotor</p>
                                        <p className="text-dark font-weight-bold mb-2">Drone Equipment Maintenance</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 2</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Emergency Identification and Handling</p>
                                        <p className="text-dark font-weight-bold mb-2">Payload Installation and Utilization</p>
                                        <p className="text-dark font-weight-bold mb-2">Image and Video Interpretation</p>
                                        <p className="text-dark font-weight-bold mb-2">Introduction to Flight Simulator</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 3</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Flight Simulator Training</p>
                                        <p className="text-dark font-weight-bold mb-2">Assembling and De-assembling of Drones</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 4</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Practical Flying with Instructor Supervision</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 5</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Solo Flying </p>
                                    </td>
                                </tr>
                                
                                   
                            </tbody>
            </table>

<h4>Certificate</h4>
            <p className="text-dark lead text-justify">At the end of the Training Course, a certificate will be presented to the participants who have attended all the sessions of the Training Course. The certificate will be titled, <b>"Diploma in Drone Technology for completing 'MULTIROTOR DRONE/UAV PILOT COURSE"</b></p>
                    <div style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"green"}} onClick={()=>{navigate("/trainingregistration")}}>Enroll Now</button>

                    </div>
                    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



</div>
  );
}

export default Training;



