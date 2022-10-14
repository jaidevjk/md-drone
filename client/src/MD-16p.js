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


function MD16p() {
  
  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
  <section className="" style={{margin:"0px",padding:"0px auto"}}>
      <div className="container" style={{marginTop:"0px",padding:"0px auto"}}>
        <h2>MD 16q</h2>
        <div className="productinfo">
          <p style={{color: "#1da912", align: "center"}}>35 Minute Endurance | 1 Kilometere Range | 49 Kg MTOW</p>
        </div>
<p>MD-16P agricultural drone is a long endurance, hybrid multirotor drone, which works on the petrol. MD-16P drone is equipped with F6000 hybrid power system and high quality flight controller system.</p>        <br />
        <br />
        <div className="row we-offer-cover">
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/MD16p-img-1.jpg" alt="img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 we-offer-item">
            <div className="offer-item-img">
              <img src="img/MD16p-img-2.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="row we-offer-bottom">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-111.svg" alt="img" />
              <h6>takeoff Weight 49kg</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-2.svg" alt="img" />
              <h6>Endurance 40minutes</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-3.svg" alt="img" />
              <h6>flying speed 8m/s</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="block-icon">
              <img src="img/icon-tab-4.svg" alt="img" />
              <h6>tank volume 16liters</h6>
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
              <h6>transmission 1000m</h6>
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
        <td>1150×1150×590 mm (arm unfolded, without propellers)</td>
      </tr>
      <tr>
        <td>Maximum Takeoff weight (MTOW)</td>
        <td>49 kg</td>
      </tr>
      <tr>
        <td>Endurance</td>
        <td>40 min</td>
      </tr>
      <tr>
        <td>Maximum flying speed</td>
        <td>8 m/s</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>7.7 kg</td>
      </tr>
      <tr>
        <td>Power</td>
        <td>5 kw</td>
      </tr>
      <tr>
        <td>Fuel consumption</td>
        <td>6 L/h</td>
      </tr>
      <tr>
        <td>Tank volume</td>
        <td>16 L</td>
      </tr>
      <tr>
        <td>Spray swath</td>
        <td>4.5 – 5.5 m</td>
      </tr>
      <tr>
        <td>Pump</td>
        <td>7 L/min</td>
      </tr>
      <tr>
        <td>Maximum Transmission Range</td>
        <td>1000 m</td>
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
          <p className="" style={{color:"#1da912",align:"center"}}>Hybrid Power System</p>
        </div>
        <div className="overviewinfo">
          <p>Hybrid power system does not rely on external startup equipment and engine will be ignited very quickly. Engine vibration is reduced with the scientific placements of the rubber dampeners and temperature of the engine is controlled by the heat fins, due to this engine performance is increased. Hybrid power system requires a backup batteries with anti spark connectors and those batteries will be charged in the mid air. Fuel tank capacity of 3L is installed in the drone.</p>        </div>
       
        <div className="overviewtitle">
          <p className="" style={{color:"#1da912",align:"center"}}>High Efficient Spraying System</p>
        </div>
        <div className="overviewinfo">
          <p>MD-16P agricultural drone incorporates double pump, each with a capacity of 3.5 L/min with 4 double nozzles. Based on the actual tests, MD-16P agricultural drone has a swath of 4.5 to 5.5 m and due the double nozzle, spray coverage on the crop will be higher.
            <br />
            <br />
            The function of intelligent spraying flow can be controlled which is associated with the flight speed: the faster the speed, the greater the flow; Speed is lower than 0.5 m/s, pump will shut off independently. It not only ensures the uniformity of spray, but also save agricultural inputs.
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
        <h2 style={{color: "#fff"}}>know more about MD 16p</h2>
        <a href="md-5q.html" className="btn" style={{background:"#565656",color:"#fff"}}>Download Catalog</a>
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

export default MD16p;



