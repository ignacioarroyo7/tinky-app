import React, {useState, useContext} from 'react';
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
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../auth/context/AuthContext';

const Navbar = () => {


  const {logged, logout} = useContext(AuthContext)


    const navigate = useNavigate();

      const [anchorElNav, setAnchorElNav] = useState(null);
      const [anchorElUser, setAnchorElUser] = useState(null);
      const [userAuth,setUserAuth]= useState(logged)
    
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
      const handleOnClickServicios = () => {
        setAnchorElNav(null);
        navigate('/search',{
          replace:true
      });
      };
      
      // const handleOnClickPerfil = ()=>{
      //   console.log('in perfil')
      //   logout()
      //   navigate('/perfil',{
      //     replace:true
      // });
      // }

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setUserAuth(false)
        //console.log('Logout')
      };
      const handleOnClickLogout = ()=>{
        console.log('logouttttttt')
        logout()
        navigate('/',{
          replace:true
      });
      }


      const handleOnClickLogin = ()=>{
        setUserAuth(true)
        navigate('/login',{
          replace:true
      });
      }

      return (
        <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
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
                Tinky
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {/* {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))} */}
                  <MenuItem key={1} onClick={handleOnClickServicios}>
                      <Typography textAlign="center">Servicios</Typography>
                    </MenuItem>
                    {/* <MenuItem key={1} onClick={handleOnClickPerfil}>
                      <Typography textAlign="center">Mi Perfil</Typography>
                    </MenuItem> */}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {/* {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))} */}
                <Button
                    key={1}
                    onClick={handleOnClickServicios}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Servicios
                  </Button>
                  {/* <Button
                    key={2}
                    onClick={handleOnClickPerfil}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Perfil
                  </Button> */}
              </Box>
              {userAuth?(<>
                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* <MenuItem key={1} onClick={()=>handleOnClickPerfil()}>
                      <Typography textAlign="center">Perfil</Typography>
                  </MenuItem> */}
                  <MenuItem key={1} onClick={()=>handleOnClickLogout()}>
                      <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                  {/* {settings.map((setting) => (s
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography onClick={()=>} textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))} */}
                </Menu>
              </Box>
              </>):(<>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    <Link href="/login">
                    <Button 
                    onClick={()=>{handleOnClickLogin()}}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >Login
                  </Button>
                    </Link>
              </Box>
              </>)}
    
            </Toolbar>
          </Container>
        </AppBar>
        </>
        
      );
};

export default Navbar;