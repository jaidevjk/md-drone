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
import {Images_Carousel,Videos_Carousel} from './Carousels/NewsAndEvents_Carousel';





function NewsAndEvents() {
  
  
  return (
<div  id="home" className = "home" > 
  
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div> 
 <br />
    <h2>NewsAndEvents</h2>                 
<section>
<div className="container">
        <Images_Carousel />
        <h2>Testimonials</h2>
        <Videos_Carousel />
        </div>
</section>
    



<br />
<section >
        <Footer />  
        </section>





</div>
  );
}

export default NewsAndEvents;



/*<Carousel showThumbs={false} showStatus={false}>
                <div>
                    <img src="img/MD10H-img-1.jpg" />
                    
                </div>
                <div>
                    <img src="img/MD10H-img-2.jpg" />
                </div>
                <div>
                    <img src="img/MD10H-img-1.jpg" />
                </div>
            </Carousel>

<div className="page-title" style={{backgroundImage:"url(img/bg-page.jpg)"}}>
        <div className="container">
            <h1 className="title">NewsAndEvents</h1>
            <div className="breadcrumbs">
                <ul>
                    <li><a href="/">home</a></li>
                    <li>NewsAndEvents</li>
                </ul>
            </div>
        </div>
    </div> */ 