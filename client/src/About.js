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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function About() {
  const [modalShowMGS, setModalShowMGS] = React.useState(false);
  const [modalShowNMS, setModalShowNMS] = React.useState(false);
  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
<br />

<section className="about-top" style={{textAlign:" justify",paddingTop:"0px",paddingBottom:"0px"}}>
      <div className="container">
        <div className="row about-top-cover" style={{textAlign:" justify",paddingTop:"0px",paddingBottom:"0px"}}>
          <div className="col-10 ">
            <img src="img/img-about-top.jpg" alt="img"   style={{width:"inherit",height:"inherit",padding: "5px"}} className="" />
          </div>
          <div className="col-10 about-info">
            <h2 className="title-left">Who We Are</h2>
            <p>Multiplex Drone Pvt. Ltd. is promoted by Multiplex Group of Companies, which holds a legacy in agriculture from past 4 decades.
              <br />
              <br />
              Multiplex drone private limited was established with a motto of aerial crop spraying solution for farmer community. Our innovative drone solutions are custom tailored to meet agriculture requirements for farmers.
              <br />
              <br />
              A multiplex drone is committed to excellence in drone technology and to deliver quality drone pilot training as well as to deliver quality of products to the customers. We bring complete end to end engineering solutions circumstantial
              services and support solutions for our customers.
            </p>
          </div>
          </div>
        </div>
    </section>
<br />
<section className="s-team" style={{width:"inherit",height: "inherit",padding:"0px",marginTop:"0px",textAlign: "justify"}}>
      <div className="container">
        <div className="visiontitle">
          <p style={{color: "#1da912"}}>OUR VISION</p>
          <br />
          <img src="img/vision.svg" alt="img" />
        </div>
        <div className="visioninfo">
          <p>Our purpose is to provide drone technology and training for farmer’s community</p>
        </div>
        <br />
        <br />
        <div className="visiontitle">
          <p style={{color: "#1da912",textAlign: "center"}}>OUR MISSION</p>
          <br />
          <img src="img/mission.svg" alt="img" />
        </div>
        <div className="visioninfo">
          <p>To harness aerial technologies for precision Farming and promote self-employment initiatives by educating to fly UAV's</p>
        </div>
      </div>
    </section>
<br />

<section className="" style={{ width:"inherit",height: "inherit",padding:"0px",margin:"0px",textAlign: "center"}}>
      <div className="" style={{padding:"0px",textAlign:"justify-all"}}>
        <h2>our management</h2>
        <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        <div className="row" style={{display:"flex",padding:"0px",margin:"0px 0px",height: "inherit",width:"inherit"}}>

          <div className="col-sm-10 col-md-3 col-xl-3 col-lg-3 col-xs-5 pointer" style={{padding:"10px",margin:"inherit",width:"inherit",height: "inherit",cursor:"pointer"}} onClick={() => setModalShowMGS(true)}>
            <div style={{width:"inherit"}} id="myBtn1">
              <img src="img/MGS.jpg" height="inherit" alt=""style={{width:"100%",height: "inherit",}} />
            </div>
            <div className="team-info">
              <h6 style={{color: "#282b32"}} className=" name"> Mr. Mahesh G Shetty </h6>
              <div style={{color: "#282b32"}} className=" prof">Managing Director</div>
            </div>
          </div>
          

          <div className="col-sm-10 col-md-3 col-xl-3 col-lg-3 col-xs-5 pointer" style={{padding:"10px",margin:"inherit",width:"inherit",height: "inherit",cursor:"pointer"}} onClick={() => setModalShowNMS(true)}>
            <div style={{width:"inherit"}} id="myBtn1">
              <img src="img/NMS.jpg" height="inherit" alt=""style={{width:"100%",height: "inherit"}} />
            </div>
            <div className="team-info">
              <h6 style={{color: "#282b32"}} className=" name"> Mrs. Nishchita M Shetty </h6>
              <div style={{color: "#282b32"}} className=" prof">Managing Director</div>
            </div>
          </div>

        </div>
      </div>


    </section>

      <MGSCenteredModal
        show={modalShowMGS}
        onHide={() => setModalShowMGS(false)}
      />
<NMSCenteredModal
        show={modalShowNMS}
        onHide={() => setModalShowNMS(false)}
      />

<section >
        <Footer />  
        </section>





</div>
  );
}

export default About;



function MGSCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          MR. MAHESH G SHETTY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Today with over 25 years of experience in the field of
              Agricultural Industry and under the continued guidance of his
              father, Mr. Mahesh G. Shetty has played a crucial role in
              bringing up the facility into an organization of status,
              deeply embedded in production and marketing of micronutrients,
              speciality fertilizers, organic manure, Bio-Fertilizer and
              Bio-Pesticides, Bio-Activators & Pesticides across India.
              <br />
              <br />
              Since 2009, under his leadership we spread our arms to global
              relations for Djibouti &, Ethiopia. Owing to the tenacious
              aspirations and efforts of Mr. Mahesh G. Shetty has been an
              Honorary Consultant of the Republic of Djibouti.
              <br />
              <br />
              Recognizing his contribution, the “International Competence
              Centre for Organic Agriculture (ICCOA)” has awarded Mr. Mahesh
              G. Shetty the title of “Young Industrial Entrepreneur”. Also,
              under his authority, the Multiplex Group has received the
              Fertilizer Association of India (FAI) award for “Production,
              Promotion, and Marketing of Bio Fertilizers”. Also, he had
              been nominated as the President of “Indian micro fertilizers
              manufacturers association”.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:"#1da912"}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function NMSCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         MRS. NISHCHITA M SHETTY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          With the constant support she received from her husband and
                        father-in-law, she envisioned completing the long-cherished
                        vision of Dr. G.P. Shetty to provide chemical residue free
                        food to the urbanites. Her personal vision is to create joy in
                        growing & nurturing of vegetables, fruits and flowers in urban
                        homes by providing organic and eco-friendly products, kits &
                        services. She actively engages herself in the “Go Green, Grow
                        Green” initiative.
                        <br />
                        <br />
                        She is also a director in all the subsidiaries of Multiplex
                        Group. Today she is an acclaimed entrepreneur in her own
                        right.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:"#1da912"}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

