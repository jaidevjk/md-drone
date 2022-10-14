
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";

// import TestimonialCard from "./TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from '@emotion/react';
import "./style.css";


const useStyles = makeStyles(theme => ({
    
    carousel:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        // margin:"0.5%",
        // padding:"1%",
         // border:"solid blue 2px",
         alignContent:"center"
        
    },
    /*container:{
        paddingLeft:"1%",
        paddingRight:"1%",
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"whiteSmoke",
        border:"solid red 2px"
    }*/
    container:{
        
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"inherit",
        // border:"solid red 2px"
    }
}));


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.

  }
      
};



// 

        


const TestimonialCarousel = () => {

    
    const classes = useStyles();

    return (
    <div className={classes.container}>
    <Carousel
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    transitionDuration={200}
    containerClass="react-multi-carousel-list"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass={classes.carousel}
    /*itemClass= 'card1'*/
    showDots = {false}
    
    
    >
        <div className="slide-testimonial"  style={{wordWrap: "break-word"}}>
            <div className="testimonial-item" >
              <img className="lazy" src="img/testimonials-2.png" alt="img"  style={{
                                                                                    position: "relative",
                                                                                    zIndex: 1,
                                                                                    width: "100px",
                                                                                    height: "100px",
                                                                                    objectFit: "cover",
                                                                                    borderRadius: "50%",
                                                                                  }}/>
              <h5 className="name">Manjunath</h5>
              <div className="prof">clients</div>
              <div className="testimon-content" style={{wordWrap: "break-word"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</div>
            </div>
          </div>

<div className="slide-testimonial" >
            <div className="testimonial-item" >
              <img className="lazy" src="img/testimonials-2.png" alt="img" style={{
                                                                                    position: "relative",
                                                                                    zIndex: 1,
                                                                                    width: "100px",
                                                                                    height: "100px",
                                                                                    objectFit: "cover",
                                                                                    borderRadius: "50%",
                                                                                  }}/>
                                                                                                <h5 className="name">Manjunath2</h5>
              <div className="prof">clients</div>
              <div className="testimon-content">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</div>
            </div>
          </div>

<div className="slide-testimonial" >
            <div className="testimonial-item" >
              <img className="lazy" src="img/testimonials-2.png" alt="img" style={{
                                                                                    position: "relative",
                                                                                    zIndex: 1,
                                                                                    width: "100px",
                                                                                    height: "100px",
                                                                                    objectFit: "cover",
                                                                                    borderRadius: "50%",
                                                                                  }}/>
              <h5 className="name">Manjunath3</h5>
              <div className="prof">clients</div>
              <div className="testimon-content">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</div>
            </div>
          </div>
    
    </Carousel>
    </div>
    );
}
export default TestimonialCarousel;