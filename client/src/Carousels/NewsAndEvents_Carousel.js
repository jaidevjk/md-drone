import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from '@emotion/react';
import axios from "axios";
 import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import API from '../Api';

const useStyles = makeStyles(theme => ({
   

   carousel:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        margin:"0.5%",
         padding:"0%",
          paddingLeft:"0%",
         paddingRight:"0%",
         paddingBottom:"0%",
          //border:"solid green 1px",
         alignItems:"center",
          paddingBottom:"10px",
          //backgroundColor:"#fff"
        
    },
    container:{
        // paddingLeft:"1%",
        // paddingRight:"1%",
        // marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        //backgroundColor:"inherit",
        //backgroundColor:"#fff",
         //border:"solid green 2px"
    },

carousel1:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        height:"300px",
        margin:"0.5%",
         padding:"0.30%",
         //border:"solid green 1px",
         alignContent:"center",
        // boxShadow: "10px 10px 24px rgba(0, 0, 10, 0.1)",
         boxShadow: "6px 6px 6px rgb(0 0 0 / 25%)",
         // backgroundColor:"#fff"
        
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
         paddingBottom:"1%",
        marginBottom:"10px",
        width:"100%",
        display:"inline-block",
        //backgroundColor:"inherit",
        //backgroundColor:"#fff"
        //border:"solid green 2px"
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
     const [userData,setData] = useState([]);

    useEffect(()=>{
    
        verify();

                    },[]);


    const verify = async()=>{

     await axios
      .get(API+"/newsandevents")
      .then((response) => {
        //console.log(response)
        let data = response.data;
         //console.log(data.data);
        setData(data.data.reverse());          
        
       })
         
      .catch((error) => {
        
        console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            //console.log(userData);

        })
    
   
  }

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

{
        userData.map((val,index)=>{
            console.log(val.eventdate)
          let eventDay= val.eventdate.split('/')[1] ;
          let eventYear = val.eventdate.split('/')[2] ;

          let eventMonth = val.eventdate.split('/')[0] ;
          var month = ['January', 'February', 'March',
             'April', 'May', 'June', 'July',
             'August', 'September', 'October',
             'November', 'December'
            ][eventMonth-1].slice(0,3) || ''; //.slice(0,3)
           console.log(month);
            return(
          
<div className="slider-new-product" style={{margin:"0px",marginTop:"0px",width:"100%",height:"100%",}}>
              <div className="slide-new-product" style={{margin:"0px",padding:"0px",}}>
                <div className="prod-item new" style={{margin:"0px",padding:"0px",}}>
                  <div className="prod-thumbnail" style={{margin:"0px",padding:"0px",}}>
                    <div className="prod-img" style={{margin:"0px",padding:"0px",}}>
                      <img src={val.img} alt="img"  height="100%" style={{padding:"10px",backgroundColor:"#fff"}}/>
                      
                    </div>
                     
                  </div>
                </div>
            </div>
            <div className="row" style={{height:"auto",width:"100%",paddingLeft:"10px",paddingTop:"10px",backgroundColor:"#efefef"}}>
                                    <div className="post-date col-2" style={{paddingTop:"5px",color:"white",backgroundColor:"#1da912",height:"90px",fontWeight:"450",textAlign:"center"}}>
                                        <div className="day" style={{padding:"0px 1px",textAlign:"left"}}>{eventDay}</div>
    
                                        <div className="month" style={{padding:" 0px 1px",textAlign:"left"}}>{month}</div>
                                         <div className="month" style={{padding:" 0px 1px",textAlign:"left"}}>{eventYear}</div>
                                    </div>
    
                                    <div className="post-content col-9" style={{textAlign:"justify"}}>
                                        <span style={{textAlign:"justify",color:"black"}} className="">{val.description}</span>
                                    </div>
                              </div> 
            </div>

 );
        })

        }






     {
    //             <div className="slider-new-product" style={{margin:"0px",}}>
    //               <div className="slide-new-product" style={{margin:"0px",padding:"0px",}}>
    //                 <div className="prod-item new" style={{margin:"0px",padding:"0px",}}>
    //                   <div className="prod-thumbnail" style={{margin:"0px",padding:"0px",}}>
    //                     <div className="prod-img" style={{margin:"0px",padding:"0px",}}>
    //                       <img src="img/blog-img-1.jpg" alt="img"  height="100%" style={{padding:"10px"}}/>
                          
    //                     </div>
                         
    //                   </div>
    //                 </div>
    //             </div>
    //             <div className="row" style={{height:"200px",width:"100%",}}>
    //                                     <div className="post-date col-3" style={{paddingTop:"5px",color:"black"}}>
    //                                         <div className="day" style={{}}>20</div>
        
    //                                         <div className="month">Jan</div>
    //                                     </div>
        
    //                                     <div className="post-content col-9" style={{paddingTop:"5px",textAlign:"justify"}}>
    //                                         <span style={{textAlign:"justify",color:"black"}} className="">Mr. Shivakumar HG (Technical & Operations) briefed about the usage of agricultural spraying drones on Arecanut for Kannada Prabha newspaper</span>
    //                                     </div>
    //                               </div> 
    //             </div>
        
    //             <div className="slider-new-product" style={{margin:"0px",}}>
    //               <div className="slide-new-product" style={{margin:"0px",padding:"0px",}}>
    //                 <div className="prod-item new" style={{margin:"0px",padding:"0px",}}>
    //                   <div className="prod-thumbnail" style={{margin:"0px",padding:"0px",}}>
    //                     <div className="prod-img" style={{margin:"0px",padding:"0px",}}>
    //                       <img src="img/blog-img-1.jpg" alt="img"  height="100%" style={{padding:"10px"}}/>
                          
    //                     </div>
                         
    //                   </div>
    //                 </div>
    //             </div>
    //             <div className="row" style={{height:"200px",width:"100%",}}>
    //                                     <div className="post-date col-3" style={{paddingTop:"5px",color:"black"}}>
    //                                         <div className="day" style={{}}>22</div>
        
    //                                         <div className="month">Jan</div>
    //                                     </div>
        
    //                                     <div className="post-content col-9" style={{paddingTop:"5px",textAlign:"justify"}}>
    //                                         <span style={{textAlign:"justify",color:"black"}} className="">Mr. Shivakumar HG (Technical & Operations) briefed about the usage of agricultural spraying drones on Arecanut for Kannada Prabha newspaper</span>
    //                                     </div>
    //                               </div> 
    //             </div>
        
    //             <div className="slider-new-product" style={{margin:"0px",}}>
    //               <div className="slide-new-product" style={{margin:"0px",padding:"0px",}}>
    //                 <div className="prod-item new" style={{margin:"0px",padding:"0px",}}>
    //                   <div className="prod-thumbnail" style={{margin:"0px",padding:"0px",}}>
    //                     <div className="prod-img" style={{margin:"0px",padding:"0px",}}>
    //                       <img src="img/Newsandevents-IIHR.jpg" alt="img"  height="100%" style={{padding:"10px"}}/>
                          
    //                     </div>
                         
    //                   </div>
    //                 </div>
    //             </div>
    //             <div className="row" style={{height:"200px",width:"100%",}}>
    //                                     <div className="post-date col-3" style={{paddingTop:"5px",color:"black"}}>
    //                                         <div className="day" style={{}}>20</div>
        
    //                                         <div className="month">Jan</div>
    //                                     </div>
      
    //                                 <div className="post-content col-9" style={{paddingTop:"5px",textAlign:"justify"}}>
    //                                     <span style={{textAlign:"justify",color:"black"}} className="">Mr. Shivakumar HG (Technical & Operations) briefed about the usage of agricultural spraying drones on Arecanut for Kannada Prabha newspaper</span>
    //                                 </div>
    //                           </div> 
    //         </div>
}

  
        </Carousel>
    </div>
    );
}

const Videos_Carousel = () => {

    const [userData,setData] = useState([]);

    useEffect(()=>{
    
        verify();

                    },[]);


    const verify = async()=>{

     await axios
      .get(API+"/iframelinks")
      .then((response) => {
        //console.log(response)
        let data = response.data;
         //console.log(data.data);
        setData(data.data);          
        
       })
         
      .catch((error) => {
        
        console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            //console.log(userData);

        })
    
   
  }
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
        
            
              <div className="" style={{width:"100%",padding:"0px",heigth:"300px"}}>
            <iframe className="lazy" src="https://www.youtube.com/embed/l1OVENpxFkM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              style={{margin:"0px",height:"100%",width:"100%",padding:"0px"}} >
            </iframe>
            </div>
            

          <div className="" style={{width:"100%",padding:"0px",heigth:"300px"}}>
            <iframe className="lazy" src="https://www.youtube.com/embed/LiafM_WhQok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              style={{margin:"0px",height:"100%",width:"100%"}} >
            </iframe>
            </div>
            
              <div className="" style={{width:"100%",padding:"0px",heigth:"300px"}}>
              <iframe style={{margin:"0px",height:"100%",width:"100%"}} className="" src="https://www.youtube.com/embed/ZJUriaB6_3g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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





