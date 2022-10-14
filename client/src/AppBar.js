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

const useStyles = makeStyles(theme => ({

}));

const ResponsiveAppBar = () => {
   const classes = useStyles();
 
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
        <Box sx={{ flexGrow: 0,}}>
                                <a href="/" className="logo"><img src="img/mainlogo.png" alt="logo" /></a>
                              
            
          </Box>


 
                              
             <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
                padding:"0px",
    
              }}
              PaperProps={{
              style: {
                position:"static",
                top:"auto",
                zIndex: 1,
                marginLeft:"-0px", 
                marginTop:"69px",
                // width:"max-content",
                float:"left",       
                backgroundColor:"#262c30",
                borderRadius:"0px",

                
              }
            }}
            >
        <MenuItem className="activemenu" ><li className="activeli"  ><a href="/" >Home</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"  ><a href="/about" >About</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/products">Products</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/services">Services</a></li></MenuItem>
        <MenuItem className="activemenu"><li className="activeli"><a href="/contact">Contact</a></li></MenuItem>
                              
            </Menu>
          
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },height:"inherit" }}>
                            <nav className="nav-menu">
                                  <ul className="nav-list">
                                    <li className="">
                                      <a href="/">Home</a>
                                    </li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                  </ul>
                                </nav>
              
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
                             <ul className="header-icon" >
                                          <li className="search">
                                            <a className="icon" href="#">
                                              <i className="fa fa-search" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}></i>
    </a>
               
                                          </li>
                                          <li className="favorites">
                                            <a className="icon" href="https://www.facebook.com/MultiplexGroupofCompanies">
                                              <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="https://www.instagram.com/multiplexgroup/">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                              </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="https://www.youtube.com/MultiplexFarmer">
                                              <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="https://www.linkedin.com/company/multiplex-group-of-companies">
                                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      
                       <br /><Collapse in={open}>
 <InputGroup className="mb-3" id="example-collapse-text" style={{position:"absolute",
          top:"70px",
          zIndex:"1",
          width:"180px"}}>
        
          <input type="search" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{paddingLeft:"0px",borderColor:"#fff",backgroundColor:"#fff",height:"40px",borderRadius:"0px"}}/>

          <InputGroup.Text id="basic-addon1" style={{backgroundColor:"green",color:"white",borderRadius:"0px" }}><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
      </InputGroup>
</Collapse>

          </Typography>

          
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
            
          
                             <ul className="header-icon" >
                                          <li className="search">
                                            <a className="icon" href="#">
                                              <i className="fa fa-search" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        ></i>
    </a>
               
                                          </li>
                                          <li className="favorites">
                                            <a className="icon" href="#">
                                              <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="#">
                                              <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                          <li>
                                            <a className="icon" href="#">
                                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      
         <br /><Collapse in={open}>
 <InputGroup className="mb-3" id="example-collapse-text" style={{position:"absolute",
          top:"70px",
          zIndex:"1",
          width:"180px"}}>
        
          <input type="search" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{paddingLeft:"0px",borderColor:"#fff",backgroundColor:"#fff",height:"40px",borderRadius:"0px"}}/>

          <InputGroup.Text id="basic-addon1" style={{backgroundColor:"green",color:"white",borderRadius:"0px" }}><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
      </InputGroup>
</Collapse>
                   
          </Typography>
          <Box sx={{ flexGrow:0, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon sx={{ fontSize:30}} />
            </IconButton>
           
          </Box>
        </Toolbar>
      </Container>
       
    </AppBar>


</>
  );
};
export default ResponsiveAppBar;



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