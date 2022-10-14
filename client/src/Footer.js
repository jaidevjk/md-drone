import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';


function Footer() {
  
  return (
<div className="App">                          

          
        <footer>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3 footer-info">
          <h5>contact us</h5>
          <p style={{color:"#fff"}}>No.50/1, Manasanagar,
            Nagarbhavi, Bangalore-560072
            <br />
            <br />
            corporate@multiplexdrone.com
            <br />
            +91-80-23497464
            <br />
            +91-6362900041
          </p>
        </div>
        <div className="col-6 col-sm-4 col-lg-2 blok-link">
          <h5>Pages</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>
        <div className="col-6 col-sm-4 col-lg-2 blok-link">
          <h5>info</h5>
          <ul>
            <li><a href="#">Training</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="#">News & Events</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-lg-2 blok-link">
          <h5>support</h5>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 footer-subscribe">
          <h5>subscribe</h5>
          <form action="" className="subscribe-form">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="subscribe" aria-label="Username" aria-describedby="basic-addon1" />
              <button className="input-group-text text-light" style={{backgroundColor: "#1da912"}}>send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom" >
        <div className="row " >
          <div className="col-12 col-md-12" style={{paddingLeft:"32%"}}>
            <a href="index.html" className="logo footer-logo"><img src="img/mainlogo.png" alt="logo" /></a>
          </div>
          <div className="copyright" style={{padding:"0px",paddingTop:"20px"}}>
            
              <div className="d-flex row" style={{padding:"0px"}} >
                <p className="col-md-5 col-sm-6 col-lg-5" style={{marginLeft:"0%",width:"max-content",marginBottom:"0%",}}>
                  &#169;Cpoyright : Multiplex Drone Private Limited
                  </p>
                  <a href="https://techravensolutions.com" target="_blank" className="col-md-5 col-sm-6 col-lg-5 " style={{marginLeft:"0%",width:"max-content"}}>
                    <img className="techraven" src="img/TRlogo.png" height="10px" alt="img" />
                  </a>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
</div>
      
  );
}

export default Footer;




