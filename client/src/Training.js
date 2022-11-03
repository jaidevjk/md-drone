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
        <p className="slogan">Multiplex Drone Private Limited and Indian Institute of Drones are collaborated for Drone training</p>
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
        <div className="overviewinfo">
          <p>• Certification as a drone pilot from military qualified instructors
            <br />
            • The certificate will be titled - Diploma in Drone Technology in Multirotor Drone Pilot Course
            <br />
            • Drone Pilot Card
          </p>
          </div>
        </div>
    </section>
   
    <section className="s-shop">
      <div className="container s-anim">
        <h2>Who Should Attend</h2>
        <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>

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
        <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        <div className="container" >
          <div className="row" >
            <div className="col-12 col-sm-12 col-md-6 train-banner">
              <div className="baner-item">
                <img src="img/banner-1.jpg" alt="img" />
                <div className="baner-item-content">
                  <h4>Micro Category Multirotor Drone Pilot Course</h4>
                  <br />
                  <p>Course deals with the explanation of technical aspects of drone, regulations, simulation and drone pilot training</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal1" className="quiry-btn">read more</a>
                  <div className="banner-sale-cover">
                    <div className="banner-sale">Fees: 28,500 + 18% GST</div>
                    <p>Duration: 4 Days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 train-banner">
              <div className="baner-item">
                <img src="img/banner-1.jpg" alt="img" />
                <div className="baner-item-content">
                  <h4>Small Category Multirotor Drone Pilot Course</h4>
                  <br />
                  <p>Detailed teaching of technical aspects of drone, simulation, regulations and drone pilot training.</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal2" className="quiry-btn">read more</a>
                  <div className="banner-sale-cover">
                    <div className="banner-sale">Fees: 60,000 + 18% GST</div>
                    <p>Duration: 5 Days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 train-banner">
              <div className="baner-item">
                <img src="img/banner-1.jpg" alt="img" />
                <div className="baner-item-content">
                  <h4>Agricultural Drone Pilot Course</h4>
                  <br />
                  <p>Course is enriched with technical aspects of drone, in detail explanation of DGCA regulations, simulation training and drone pilot training.</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal3" className="quiry-btn">read more</a>
                  <div className="banner-sale-cover">
                    <div className="banner-sale">Fees: 60,000 + 18% GST</div>
                    <p>Duration: 7 Days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 train-banner">
              <div className="baner-item">
                <img src="img/banner-1.jpg" alt="img" />
                <div className="baner-item-content">
                  <h4>Agricultural Drone Pilot Course2</h4>
                  <br />
                  <p>Course is enriched with technical aspects of drone, in detail explanation of DGCA regulations, simulation training and drone pilot training.</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal4" className="quiry-btn">read more</a>
                  <div className="banner-sale-cover">
                    <div className="banner-sale">Fees: 60,000 + 18% GST</div>
                    <p>Duration: 10 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="s-team" style={{paddingTop:"0px"}}>
      <div className="container">
        <h2>our instructors</h2>
 {
//         <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-xl-4 team-item-cover instructors">
            <div className="team-item instructors-team">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="" />
              </div>
              <div className="team-info">
                <h6 className="name">Maj Gen RC Padhi</h6>
                <div className="prof">Defence Mentor IID & Ex-Military Surveyor General</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-4 team-item-cover instructors">
            <div className="team-item instructors-team">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="" />
              </div>
              <div className="team-info">
                <h6 className="name">Ram Sarath Kumar</h6>
                <div className="prof">Chief Operations Officer, IID</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-4 team-item-cover instructors">
            <div className="team-item instructors-team">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="" />
              </div>
              <div className="team-info">
                <h6 className="name">MS Prasad</h6>
                <div className="prof">Chief Patron IID & Ex DRDO Scientist G</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-4 team-item-cover instructors">
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
          <div className="col-12 col-sm-6 col-md-6 col-xl-4 team-item-cover instructors">
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
          <div className="col-12 col-sm-6 col-md-6 col-xl-4 team-item-cover instructors">
            <div className="team-item instructors-team">
              <div className="team-img">
                <img src="img/team-1.jpg" alt="" />
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

<section >
        <Footer />  
        </section>

 <ToastContainer />

<a
        href="https://wa.me/916362900041"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 20, right: 30, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>

 {
  // ------Modals start------
  }
<div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Title1</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>



      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",}}>Close</button>
        
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Title2</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>



      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",}}>Close</button>
        
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="modal3" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Title3</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>



      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",}}>Close</button>
        
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="modal4" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Title4</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>



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



