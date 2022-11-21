import * as React from 'react';
import {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
 import axios from "axios";
 import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import AdminAppbar from './AdminAppbar' ;
import CircularStatic from './CircularLoaders';
import Modal from 'react-bootstrap/Modal';


export default function AddYoutubeLinks(props) {

const navigate = useNavigate();
 

const [youtubelinkData,setyoutubelinkData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [val, setVal] = useState();
 
    const [modalShow, setModalShow] = React.useState(false);


useEffect(()=>{
    
 getYoutubeLinks();

  },[]);

//let tableBody;


const deleteLink= async(id)=>{
const Id = id;
   axios.delete(`http://localhost:4003/iframelinks/${Id}`)
                .then((response) => {
                  //console.log(response.data);
                 

                  toast.success("Successfully Deleted.",{position: "top-center",});
                   getYoutubeLinks()
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })

}



  const getYoutubeLinks = async()=>{

     await axios
      .get("http://localhost:4003/iframelinks")
      .then((response) => {
        //console.log(response)
        let data = response.data;
         //console.log(data.data)
        setyoutubelinkData(data.data
      //     .filter((valu) => {
      //      // console.log(search)
      //       //console.log(typeof valu.email)
      //   if (search === "") {
         
      //     return valu;
      //    } 
      //     //else if (
      //   //   //valu.name.toLowerCase().includes(search.toLowerCase())

      //   //   /
      //   // ) {

      //   //    console.log("search");
      //   //   return valu;
      //   // }
      //   //else{alert(`The result for the search value ${search} is not found`)}
      // })
          .map((val,index)=>{
            const id = val._id;
            //console.log(id);
            //console.log(val.eventdate.split(' '));
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.link}</td>
            
            <td style={{padding:"5px"}}><button className="quiry-btn" onClick={()=>deleteLink(id)}>Delete</button> </td>

          </tr>)}))
        //console.log(eventData);
       
        })
        
      .catch((error) => {
        
        console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }




const addYouTubeLinks = async(e)=>{
    e.preventDefault();
    
    let objectOb = {
            
            link: e.target.link.value,
            
                     }
console.log(objectOb)
              await axios.post('http://localhost:4003/iframelinks', objectOb)
                .then((response) => {
                  console.log(response.data);
                  // navigate(`/`);
                  
                  e.target.link.value = "";
                  

                  toast.success("Successfully Added.",{position: "top-center",});
                  
                  
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
    
    

  }
  





  return (
    
    <div style={{backgroundColor:"#fff"}}>
<div style={{width:"100%"}}>
    <AdminAppbar title={"News And Events"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                    
                   <div style={{float:"left"}}><span><input className="form-control" type="search" name="enter" id="search" placeholder="Search By Name" value={search}  onChange={(e)=> {setSearch(e.target.value)}}/>
                    <br /><input type="submit"  className="quiry-btn" value="Search" onClick={getYoutubeLinks} ></input></span></div>
                          
                          <span  style={{float:"right",marginRight:"25px"}} className="quiry-btn" onClick={() => setModalShow(true)}>Add youtube-links</span>




        </Grid>
  </Grid>
  </Grid><br />
    
    <ToastContainer />


         

</div>
    </section>



 <table  style={{border:"solid green 2px"}}>
                <thead style={{}}>
                  <tr style={{}}>
                    <th className="slno">Sl. No</th>
                    
                    <th scope="col" className="th">Event Date</th>
                    <th scope="col" className="th">Description</th>                     
                     <th scope="col" className="th">Date</th>
                    <th scope="col" className="th">Time</th>
                    <th scope="col" className="th">Delete Events </th>

                  </tr>
                </thead>
                 <tbody style={{border:"solid green 1px"}}>
      {youtubelinkData}
    </tbody>
              </table>



      <Modal
      show={modalShow}
        onHide={() => setModalShow(false)}
        sx={{}}
    >
      
      <Modal.Body style={{}}>
        <Card sx={{border:"solid green 2px", }} id="" >
      <div  style={{textAlign:"center"}}><img src="img/mainlogo.png" alt="" width="inherit"/></div> <hr/>
    <h2 style={{paddingTop:"0px"}}>Add Youtube-Links</h2>
      <CardContent sx={{ maxWidth: 500}}>
        <form onSubmit={addYouTubeLinks}>   
    <Grid container  rowSpacing={2}>
    

                          <Grid item xs={12} className="card-grid">
                          <Grid    columnSpacing={{ xs: 1, sm: 2, md: 4,large:4 }} className="container1">
                <Grid item xs={5} md={6} className="grid-card-label">
                                  <label className="label" for="name">Youtube-Link </label></Grid>
                    <Grid item xs={12} md={12}><span><input className="grid-input" name="link"  type="url" style={{Width:"100%",color:"black"}}  
                     required/></span>
                          </Grid>
                               </Grid>
                                 </Grid>

                    

                  
               
                     <Grid item xs={12} className="card-grid" >
                     
                    <span ><input type="submit"  className="quiry-btn" value="Add" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
                 </Grid>
                 
                          
               

            
            </Grid>

            
    </form>


 
      </CardContent>
              
<ToastContainer />
   </Card>
      </Modal.Body>
      
    </Modal>
    
   </div>
   
  );
}





// <Card sx={{ maxWidth: 500,border:"solid green 2px" }} id="card-container">
//       <img src="img/mainlogo.png" alt="" width="inherit"/><hr/>
//     <h2 style={{paddingTop:"0px"}}>Add Testimonials</h2>
//       <CardContent sx={{ maxWidth: 500}}>
//         <form onSubmit={addTestimonial}>   
//     <Grid container  rowSpacing={2}>
//     <Grid item xs={12} className="card-grid" >
//               <Grid  columnSpacing={2}  className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                       <label className="label" for="email">Name* </label></Grid>
//                      <Grid item  xs={12} md={12}><input className="grid-card-input" name = "name"  type="text" style={{width:"100%",color:"black"}} 
//                      required/></Grid>
//                         <Grid item  ></Grid>
//                          </Grid>


//                          </Grid><br /><br />

//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                                   <label className="label" for="name">Designation* </label></Grid>
//                     <Grid item xs={12} md={12}><span><input className="grid-input" name="designation"  type="text" style={{Width:"100%",color:"black"}}  
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>

//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                                   <label className="label" for="name">Description* </label></Grid>
//                     <Grid item xs={12} md={12}><span><textarea className="grid-input" name="description"  type="text" style={{Width:"100%",color:"black"}} 
//                      maxlength="250" minlength="100"
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>


//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1">
//                 <Grid item xs={3} md={3} className="grid-card-label">
//                                   <label className="label" for="name">Upload Photo* </label></Grid>
//                     <Grid item xs={12} md={12}><span><input className="grid-input" name="file1"  type="file" style={{Width:"100%",color:"black"}}   onChange={encodeImageFileAsURL}
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>       

                  
               
//                      <Grid item xs={12} className="card-grid" >
                     
//                     <span><input type="submit"  className="quiry-btn" value="Add" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
//                  </Grid>
                 
                          
               

            
//             </Grid>

            
//     </form>
//       </CardContent>
              
// <ToastContainer />
//    </Card>



//{
//         userData.map((val,index)=>{
         
//           return(
//           <div className="" style={{width:"100%"}}>
//             <iframe className="lazy" src={val.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
//               style={{margin:"0px",height:"300px",width:"100%"}} >
//             </iframe>
//             </div>
//             );
//         })
//       }

{
//       <Modal
//       show={modalShow}
//         onHide={() => setModalShow(false)}
//         sx={{width:"600px"}}
//     >
      
//       <Modal.Body style={{border:'solid green 2px',width:"600px"}}>
//         <Card sx={{border:"solid green 2px",width:"100%" }} id="" >
//       <div  style={{textAlign:"center"}}><img src="img/mainlogo.png" alt="" width="inherit"/></div> <hr/>
//     <h2 style={{paddingTop:"0px"}}>Add Youtube-Links</h2>
//       <CardContent sx={{ maxWidth: 500}}>
//         <form onSubmit={addYouTubeLinks}>   
//     <Grid container  rowSpacing={2}>
    

//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 4,large:4 }} className="container1">
//                 <Grid item xs={5} md={6} className="grid-card-label">
//                                   <label className="label" for="name">Youtube-Link </label></Grid>
//                     <Grid item xs={12} md={12}><span><input className="grid-input" name="link"  type="url" style={{Width:"100%",color:"black"}}  
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>

                    

                  
               
//                      <Grid item xs={12} className="card-grid" >
                     
//                     <span ><input type="submit"  className="quiry-btn" value="Add" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
//                  </Grid>
                 
                          
               

            
//             </Grid>

            
//     </form>


//  
//       </CardContent>
              
// <ToastContainer />
//    </Card>
//       </Modal.Body>
      
//     </Modal>
}




// function IframesCenteredModal(props) {

// const addYouTubeLinks = async(e)=>{
//     e.preventDefault();
    
//     let objectOb = {
            
//             link: e.target.link.value,
            
//                      }
// //console.log(objectOb)
//               await axios.post('http://localhost:4003/iframelinks', objectOb)
//                 .then((response) => {
//                   //console.log(response.data);
//                   // navigate(`/`);
                  
//                   e.target.link.value = "";
                  

//                   toast.success("Successfully Added.",{position: "top-center",});
                  
                  
//                 })
//                 .catch((error) => {
//                   //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
//                   console.log(error.response)
//                   //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
//                  })
    
    

//   }



//   return (
//     <Modal
//       {...props}
      
//       aria-labelledby="contained-modal-title-vcenter"
//       style={{border:"solid green 2px",}}
//     >
      
//       <Modal.Body style={{border:"solid green 2px",width:"100%"}}>
//         <Card sx={{ maxWidth: 500,border:"solid green 2px",width:"100%" }} id="card-container" >
//       <div  style={{textAlign:"center"}}><img src="img/mainlogo.png" alt="" width="inherit"/></div> <hr/>
//     <h2 style={{paddingTop:"0px"}}>Add Youtube-Links</h2>
//       <CardContent sx={{ maxWidth: 500}}>
//         <form onSubmit={addYouTubeLinks}>   
//     <Grid container  rowSpacing={2}>
    

//                           <Grid item xs={12} className="card-grid">
//                           <Grid    columnSpacing={{ xs: 1, sm: 2, md: 4,large:4 }} className="container1">
//                 <Grid item xs={5} md={6} className="grid-card-label">
//                                   <label className="label" for="name">Youtube-Link </label></Grid>
//                     <Grid item xs={12} md={12}><span><input className="grid-input" name="link"  type="url" style={{Width:"100%",color:"black"}}  
//                      required/></span>
//                           </Grid>
//                                </Grid>
//                                  </Grid>

                    

                  
               
//                      <Grid item xs={12} className="card-grid" >
                     
//                     <span ><input type="submit"  className="quiry-btn" value="Add" style={{background:"#1da912",color:"#fff"}}></input></span>
                    
//                  </Grid>
                 
                          
               

            
//             </Grid>

            
//     </form><br />


    
//       </CardContent>
              
// <ToastContainer />
//    </Card>
//       </Modal.Body>
      
//     </Modal>
//   );
// }