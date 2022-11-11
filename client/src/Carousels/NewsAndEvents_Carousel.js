import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from '@emotion/react';


const useStyles = makeStyles(theme => ({
   

   carousel:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        margin:"0.5%",
         padding:"1%",
          paddingLeft:"0%",
         paddingRight:"0%",
         paddingBottom:"0%",
          //border:"solid blue 2px",
         alignItems:"center",
         // paddingBottom:"1%"
        
    },
    container:{
        // paddingLeft:"1%",
        // paddingRight:"1%",
        // marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"inherit",
        // border:"solid red 2px"
    },

carousel1:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        margin:"0.5%",
        // padding:"1%",
         //border:"solid blue 2px",
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
    container1:{
         paddingLeft:"1%",
         paddingRight:"1%",
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        backgroundColor:"inherit",
        //border:"solid red 2px"
    }
    
}));


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 600 },
  //   items: 2,
  //   slidesToSlide: 1 // optional, default to 1.
  // },
  // mobile: {
  //   breakpoint: { max: 600, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1, // optional, default to 1.

  // }
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.

  }
      
};

const responsive1 = {
  
   desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  // tablet: {
  //   breakpoint: { max: 1024, min: 768 },
  //   items: 1,
  //   slidesToSlide: 1 // optional, default to 1.
  // },
  //  mobile: {
  //   breakpoint: { max: 768, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1, // optional, default to 1.

  // },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.

  }
      
}

const Images_Carousel = () => {

    
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
    showDots = {false}
    
    
    >
        <div className="slider-new-product" style={{margin:"0px",}}>
          <div className="slide-new-product" style={{margin:"0px",padding:"0px",}}>
            <div className="prod-item new" style={{margin:"0px",padding:"0px",}}>
              <div className="prod-thumbnail" style={{margin:"0px",padding:"0px",}}>
                <div className="prod-img" style={{margin:"0px",padding:"0px",}}>
                  <img src="img/blog-img-1.jpg" alt="img"  height="100%" style={{padding:"10px"}}/>
                  
                </div>
                 
              </div>
            </div>
        </div>
        <div className="row" style={{height:"200px",width:"100%",}}>
                                <div className="post-date col-3" style={{paddingTop:"5px",color:"black"}}>
                                    <div className="day" style={{}}>20</div>

                                    <div className="month">Jan</div>
                                </div>

                                <div className="post-content col-9" style={{paddingTop:"5px",textAlign:"justify"}}>
                                    <span style={{textAlign:"justify",color:"black"}} className="">Mr. Shivakumar HG (Technical & Operations) briefed about the usage of agricultural spraying drones on Arecanut for Kannada Prabha newspaper</span>
                                </div>
                          </div> 
        </div>

        <div className="slider-new-product" style={{margin:"0px",}}>
          <div className="slide-new-product" style={{margin:"0px",padding:"0px",}}>
            <div className="prod-item new" style={{margin:"0px",padding:"0px",}}>
              <div className="prod-thumbnail" style={{margin:"0px",padding:"0px",}}>
                <div className="prod-img" style={{margin:"0px",padding:"0px",}}>
                  <img src="img/blog-img-1.jpg" alt="img"  height="100%" style={{padding:"10px"}}/>
                  
                </div>
                 
              </div>
            </div>
        </div>
        <div className="row" style={{height:"200px",width:"100%",}}>
                                <div className="post-date col-3" style={{paddingTop:"5px",color:"black"}}>
                                    <div className="day" style={{}}>20</div>

                                    <div className="month">Jan</div>
                                </div>

                                <div className="post-content col-9" style={{paddingTop:"5px",textAlign:"justify"}}>
                                    <span style={{textAlign:"justify",color:"black"}} className="">Mr. Shivakumar HG (Technical & Operations) briefed about the usage of agricultural spraying drones on Arecanut for Kannada Prabha newspaper</span>
                                </div>
                          </div> 
        </div>

        <div className="slider-new-product" style={{margin:"0px",}}>
          <div className="slide-new-product" style={{margin:"0px",padding:"0px",}}>
            <div className="prod-item new" style={{margin:"0px",padding:"0px",}}>
              <div className="prod-thumbnail" style={{margin:"0px",padding:"0px",}}>
                <div className="prod-img" style={{margin:"0px",padding:"0px",}}>
                  <img src="img/Newsandevents-IIHR.jpg" alt="img"  height="100%" style={{padding:"10px"}}/>
                  
                </div>
                 
              </div>
            </div>
        </div>
        <div className="row" style={{height:"200px",width:"100%",}}>
                                <div className="post-date col-3" style={{paddingTop:"5px",color:"black"}}>
                                    <div className="day" style={{}}>20</div>

                                    <div className="month">Jan</div>
                                </div>

                                <div className="post-content col-9" style={{paddingTop:"5px",textAlign:"justify"}}>
                                    <span style={{textAlign:"justify",color:"black"}} className="">Mr. Shivakumar HG (Technical & Operations) briefed about the usage of agricultural spraying drones on Arecanut for Kannada Prabha newspaper</span>
                                </div>
                          </div> 
        </div>


        </Carousel>
    </div>
    );
}

const Videos_Carousel = () => {

    
    const classes = useStyles();

    return (
    <div className={classes.container1}>
    <Carousel
    responsive={responsive1}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={false}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    transitionDuration={200}
    containerClass="react-multi-carousel-list"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass={classes.carousel1}
    showDots = {false}
    
    
    >
        
            
              <div className="" style={{width:"100%"}}>
            <iframe className="lazy" src="https://www.youtube.com/embed/l1OVENpxFkM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              style={{margin:"0px",height:"300px",width:"100%"}} >
            </iframe>
            </div>
            

          <div className="" style={{width:"100%"}}>
            <iframe className="lazy" src="https://www.youtube.com/embed/LiafM_WhQok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              style={{margin:"0px",height:"300px",width:"100%"}} >
            </iframe>
            </div>
            
              <div className="" style={{width:"100%"}}>
              <iframe style={{margin:"0px",height:"300px",width:"100%"}} className="" src="https://www.youtube.com/embed/ZJUriaB6_3g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            

        
         
           
           
            
        

    </Carousel>
    </div>
    );
}


export {Images_Carousel,Videos_Carousel};



 // <div className="" style={{width:"100%"}}>
 //            <iframe className="lazy" src="https://www.youtube.com/embed/l1OVENpxFkM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
 //              style={{margin:"5px",height:"300px",width:"400px"}} >
 //            </iframe>
 //            </div>
            
          
        
          
 //            <div className="" style={{width:"100%"}}>
 //              <iframe  style={{margin:"5px",height:"300px",width:"400px"}} className="" src="https://www.youtube.com/embed/LiafM_WhQok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
 //            </div>
            
          
 //            <div className="" style={{width:"100%"}}>
 //              <iframe style={{margin:"px",height:"300px",width:"400px"}} className="" src="https://www.youtube.com/embed/ZJUriaB6_3g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
 //            </div>