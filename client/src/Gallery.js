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
import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';






function Gallery() {
  
  
  return (
<div  id="home" className = "home" > 
  
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div> 
 <br />
 <div className="page-title" style={{backgroundImage:"url(img/bg-page.jpg)"}}>
        <div className="container">
            <h1 className="title">Gallery</h1>
            <div className="breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Gallery</li>
                </ul>
            </div>
        </div>
    </div>                      
<section>
<div className="container">
            <h2>Video</h2>
            <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>
<Carousel>
      <Carousel.Item>
        <div className="slide-video">
                <video  autoPlay loop muted width="100%">
          <source src="https://assets.mixkit.co/videos/56/56-720.mp4" type="video/mp4"></source>
        </video>
            </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-video">
                <video  autoPlay loop muted width="100%">
                    <source src="https://assets.mixkit.co/videos/11/11-720.mp4" type="video/mp4" />
                </video>
            </div>
      </Carousel.Item>
      <Carousel.Item>
              <div className="slide-video">
                <video  autoPlay loop muted width="100%">
                    <source src="https://assets.mixkit.co/videos/558/558-720.mp4" type="video/mp4" />
                </video>
            </div>
      </Carousel.Item>
    </Carousel>




</section>
    
<br />
<section >
        <Footer />  
        </section>





</div>
  );
}

export default Gallery;



// <Carousel showThumbs={false} showStatus={false}>
//                 <div>
//                     <img src="img/MD10H-img-1.jpg" />
                    
//                 </div>
//                 <div>
//                     <img src="img/MD10H-img-2.jpg" />
//                 </div>
//                 <div>
//                     <img src="img/MD10H-img-1.jpg" />
//                 </div>
//             </Carousel>