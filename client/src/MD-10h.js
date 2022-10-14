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


function MD10h() {
  
  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
  <section className="" style={{margin:"0px",padding:"0px auto"}}>
      <div className="container" style={{marginTop:"0px",padding:"0px auto"}}>
        <h2>MD 10h</h2>
        <div className="productinfo">
          <p style={{color: "#1da912", align: "center"}}>12 Minute Endurance | 5 Kilometere Range | 27 Kg MTOW</p>
        </div>
        <p>MD-10H series agricultural drone is a Hex-copter drone manufactured with high strength carbon fibers, impact-resistant molded materials and aerospace grade aluminum materials. MD-10H is a 10 kg payload drone for spraying agricultural inputs in farming land.</p>
        <br />
        <br />
        <div className="row we-offer-cover">
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/MD10H-img-1.jpg" alt="img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/MD10H-img-2.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="row we-offer-bottom">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-111.svg" alt="img" />
              <h6>takeoff Weight 27kg</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-2.svg" alt="img" />
              <h6>Endurance 12minutes</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-3.svg" alt="img" />
              <h6>flying speed 10m/s</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-4.svg" alt="img" />
              <h6>tank volume 10liters</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-5.svg" alt="img" />
              <h6>power backup 24hrs</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-6.svg" alt="img" />
              <h6>transmission 5000m</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

 <section className="techspecs">
      <div className="container">
        <h2>Specifications</h2>
      </div>
    </section>
    <table id="customers">
      <tr>
        <td>Dimension</td>
        <td>1495x1308x500 mm (arm unfolded, without propeller)</td>
      </tr>
      <tr>
        <td>Maximum Takeoff weight (MTOW)</td>
        <td>27 kg</td>
      </tr>
      <tr>
        <td>Endurance</td>
        <td>12 min (with full payload)</td>
      </tr>
      <tr>
        <td>Maximum flying speed</td>
        <td>10 m/s</td>
      </tr>
      <tr>
        <td>Pump discharge rate</td>
        <td>5 L/min</td>
      </tr>
      <tr>
        <td>Tank volume</td>
        <td>10 L</td>
      </tr>
      <tr>
        <td>Spray swath</td>
        <td>2.5 - 5 m</td>
      </tr>
      <tr>
        <td>Maximum Transmission Range</td>
        <td>5000 m</td>
      </tr>
      <tr>
        <td>Power Backup</td>
        <td>24 hrs</td>
      </tr>
      <tr>
        <td>Operating frequency</td>
        <td>2.4 GHz</td>
      </tr>
    </table>

 <section className="overview">
      <div className="container">
        <h2>overview</h2>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",align:"center"}}>Foldable Structure</p>
        </div>
        <div className="overviewinfo">
          <p>The fold-up design has upgraded to make the structure firmer and sturdier and is made with one-piece injection molding. Arm folding fixture has new C-shaped clip attached to hold the arm in fold-up position that can reduce the arm sagging and swinging while transportation.</p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",align:"center"}}>Fuselage Design</p>
        </div>
        <div className="overviewinfo">
          <p>MD-10H series drone design has upgraded to new fuselage design that is made up of one-piece injection molding. Number of complex parts have optimized to simplified parts to make the high-strength fuselage.</p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",align:"center"}}>High Efficient Spraying System</p>
        </div>
        <div className="overviewinfo">
          <p>MD-10H series drone spraying system equips a 10L capacity of wave-proof tank, efficient water pump, four nozzles. Based on the actual tests, spray width is 2.5 - 5m and operating efficiency is 5L/min. Scientific placement of nozzles can decrease pesticides drift in the air and economize spraying operations.
            <br />
            <br />
            The function of intelligent spraying flow can be controlled which is associated with the flight speed: the faster the speed, the greater the flow; Speed is lower than 0.5 m/s, pump will shut off independently. It not only ensures the uniformity of spray, but also save agricultural inputs.
          </p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",align:"center"}}>Drone Features</p>
        </div>
        <div className="overviewinfo">
          <p> • MD-10H series drone design has upgraded to new fuselage design that is made up of one-piece injection molding
            <br />
            • MD-10H series drone has better structural vibration resistant
            <br />
            • MD-10H series drone body is made up of high-strength and impact-resistant materials manufactured with injection molding process
            <br />
            • Drone Camera Mount: Camera Mount is designed to fix the camera in-front of the drone frame and is clip-on type based on the requirements it can be closed
            <br />
            • Multi Operation Mode: Drone can be flown in autonomous, semi-autonomous and manual mode,
            <br />
            • Better Spray Quality: MD-10H series agricultural drone is equipped with ultra-low volume technology and 80% of the water can be saved compared to traditional spraying method,
            <br />
            • Obstacle RADAR: Drone equipped with RADAR can detect any obstacles within the sight of 120 deg angle
            <br />
            • Terrain RADAR: Drone equipped with RADAR can detect and automatically align the height upto 20 m
          </p>
        </div>
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",align:"center"}}>Safety features</p>
        </div>
        <div className="overviewinfo">
          <p> If the medicine tank gets empty, low voltage and signal loss, drone will automatically come back to home location and land
            <br />
            • Has inbuilt detect and avoid technology
            <br />
            • Breakpoint intelligent record
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>

    <section className="s-discount-program mask" style={{backgroundImage: "url(img/bg-4.jpg)"}}>
      <div className="container">
        <h2 style={{color: "#fff"}}>know more about MD 10h</h2>
        <a href="" className="btn" style={{background:"#565656",color:"#fff"}}>Download Catalog</a>
      </div>
    </section>
  

    <section className="best-prices">
      <div className="container s-anim">
        <h2>related proucts</h2>
        <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

         <section className="serv-block" style={{margin:"20px",width:"90%"}}> 
        
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
        <section className="serv-block" style={{margin:"20px",width:"90%"}}>
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
    </section>

<br />
<section className="s-contacts s-main-contacts" >
      <div className="container s-anim">
        <h2>Contact us</h2>
        <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        <form id='contactform' action="php/contact.php" name="contactform" >
          <ul className="form-cover" style={{padding:"0px"}}>
            <li className="inp-name"><input id="name" type="text" name="your-name" placeholder="Name" /></li>
            <li className="inp-phone"><input id="phone" type="tel" name="your-phone" placeholder="Phone" /></li>
            <li className="inp-email"><input id="email" type="email" name="your-email" placeholder="E-mail" /></li>
            <li className="inp-text"><textarea id="comments" name="your-text" placeholder="Message"></textarea></li>
          </ul>
          <div className="checkbox-wrap">
            <div className="checkbox-cover">
              <input type="checkbox" />
              <p style={{color: "#000"}}>By using this form you agree with the storage and handling of your data by this website.</p>
            </div>
          </div>
          <div className="btn-form-cover">
            <button className="btn" style={{background:"#565656",color:"#fff"}}>SUBMIT</button>
          </div>
        </form>
        <div id="message"></div>
      </div>
    </section>


<section >
        <Footer />  
        </section>





</div>
  );
}

export default MD10h;



