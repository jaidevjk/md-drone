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




function Products() {
  
  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       


<div className="container" style={{marginBottom:"5%"}}>
      <h2>our proucts</h2>
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
<br /><br />

<section className="s-contacts s-main-contacts">
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

export default Products;



