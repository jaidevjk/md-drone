import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Collapse} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import { Link as RouterLink } from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


const useStyles = makeStyles(theme => ({
  style:{backgroundColor:"#262c30",border:"solid red 2px",minWidth:"70px",width:"100%",padding:"0px",paddingRight:"20px",margin:"0px",textAlign:"center"},
  toggleColor:{color:"#fff"},
  container:{backgroundColor:"cyan",border:"solid red 2px",width:"100%",margin:"0px",marginRight:"0px"}

}));

const ResponsiveAppBar = () => {
   const classes = useStyles();
   const [modalShow, setModalShow] = React.useState(false);

    const [open, setOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <>
       <AppBar position="static" sx={{backgroundColor:"#262c30",minHeight:"70px",maxHeight:"70px",p:0}}>
      <Container maxWidth="xl" sx={{height:"inherit"}}>
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0,}} style={{float:"left",paddingRight:"0%"}}>
                                <a href="/" className="logo"><img src="img/mainlogo.png" alt="logo" /></a>
                              
            
          </Box>


 
                              
             <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                display: { xs: 'block', md: 'none', },
                padding:"0px",
              }}
              PaperProps={{
              style: {
               position:"static",
                top:"auto",
                zIndex: 1,
                marginRight:"0%", 
                marginTop:"69px",
                float:"right",       
                backgroundColor:"#262c30",
                borderRadius:"0px",
              }
            }}
            >
        <MenuItem className="activemenu" ><li className="activeli"  ><a href="/" >Home</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"  ><a href="/about" >About</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/products">Products</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/services">Services</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/training">Training</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/contact">Contact</a></li></MenuItem>
         <MenuItem><ul className="header-icon" style={{padding:"0px"}}>
                                          <li className="search icon1">
                                            <a className="icon" href="#" style={{paddingLeft:"0px"}}>
                                              <i className="fa fa-search"  onClick={() => {setModalShow(true);setAnchorElNav(null);}}></i>
                                              </a>
               
                                          </li>
                                          <li className="favorites icon1">
                                            <a className="icon" href="https://www.facebook.com/multiplexdrone/"  target="_blank">
                                              <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          
                                          <li className="icon1">
                                            <a className="icon" href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw"  target="_blank">
                                              <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li className="icon1">
                                            <a className="icon" href="https://www.linkedin.com/company/multiplex-drone"  target="_blank">
                                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                        </ul>
              </MenuItem>                     
            </Menu>
          
         
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' },height:"inherit",marginLeft:"10px"}}>
                            <span style={{float:"left",width:"70%",paddingRight:"0%"}}>
<ul className="header-icon" ><li className="link-head">
                                      <a href="/">Home</a>
                                    </li>
                                    <li className="link-head"><a href="/about">About</a></li>
                                    <li className="link-head"><a href="/products">Products</a></li>
                                    <li className="link-head"><a href="/services">Services</a></li>
                                    <li className="link-head"><a href="/training">Training</a></li>
                                    <li className="link-head"><a href="/contact">Contact</a></li>
            </ul></span>
             <ul className="header-icon" style={{float:"right",width:"30%"}}>
                                          <li className="search icon1">
                                            <a className="icon" href="#">
                                              <i className="fa fa-search"  onClick={() => setModalShow(true)}></i>
                                              </a>
               
                                          </li>
                                          <li className="favorites icon1">
                                            <a className="icon" href="https://www.facebook.com/multiplexdrone/" target="_blank">
                                              <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                        
                                          <li className="icon1">
                                            <a className="icon" href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw" target="_blank">
                                              <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li className="icon1">
                                            <a className="icon" href="https://www.linkedin.com/company/multiplex-drone" target="_blank">
                                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                        </ul>
              
          </Box>
          

          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          
                           
                                      
         <br />
                   
          </Typography>
          <Box sx={{ flexGrow:0, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{width:"inherit"}}
            >
              <MenuIcon sx={{ fontSize:30}} />
            </IconButton>
           
          </Box>
        </Toolbar>
      </Container>
       
    </AppBar>

<MGSCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />





</>
  );
};
export default ResponsiveAppBar;


function MGSCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={{paddingTop:'10px'}}
    >
     <InputGroup className="mb-3" id="example-collapse-text" style={{position:"absolute",
          top:"70px",
          zIndex:"1",
         }}>
        
          <input type="search" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{paddingLeft:"0px",borderColor:"#fff",backgroundColor:"#fff",height:"40px",borderRadius:"0px"}}/>

          <InputGroup.Text id="basic-addon1" style={{backgroundColor:"green",color:"white",borderRadius:"0px" }}><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
      </InputGroup>
    </Modal>
  );
}


// <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>




// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>