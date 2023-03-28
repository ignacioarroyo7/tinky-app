import React, {useState, useContext, useEffect} from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../auth/context/AuthContext';
import useSessionStorage from '../../hooks/useSessionStorage';

const Navbar = () => {


  const {logged, logout} = useContext(AuthContext)
  const [tokenUser, setTokenUser] = useSessionStorage('token','')
  
  const navigate = useNavigate();
  
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userAuth,setUserAuth]= useState(logged)
  const [isClient,setIsClient] = useState(false)
    
  useEffect(()=>{
    console.log('sessionStorage.getItem("client")',sessionStorage.getItem("client"))
    setIsClient(sessionStorage.getItem("client"))
  },[])
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
      const handleOnClickCrearOferta = ()=>{
        setAnchorElNav(null);
        navigate('/crear-oferta',{
          replace:true
      });
      }
      
      // const handleOnClickPerfil = ()=>{
      //   console.log('in perfil')
      //   logout()
      //   navigate('/perfil',{
      //     replace:true
      // });
      // }

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        // setUserAuth(false)
        //console.log('Logout')
      };
      const handleOnClickLogout = ()=>{
        console.log('logouttttttt')
        logout()
        setUserAuth(false)
        sessionStorage.clear()
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

  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const onSubmit = e => {
  e.preventDefault();
  console.log("search with ",palabraBusqueda)
  setPalabraBusqueda('')
  navigate('/search',{
    replace:true
});
};


const [palabraBusqueda,setPalabraBusqueda] = useState('')

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
                    {/* {isClient?<></>:<>
                      <MenuItem
                       key={1} onClick={handleOnClickCrearOferta}>
                      <Typography textAlign="center">Crear oferta</Typography>
                    </MenuItem>
                    </>} */}
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
                Tinky
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
                  {isClient===false?
                  <Button
                  key={1}
                  onClick={handleOnClickCrearOferta}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Crear oferta
                </Button>
                  :<></>
                  }
                  
                  {/* <Button
                    key={2}
                    onClick={handleOnClickPerfil}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Perfil
                  </Button> */}
              </Box>
            {/* <form onSubmit={(e)=>onSubmit(e)}> */}
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={(e)=>onSubmit(e)}>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={e=>setPalabraBusqueda(e.target.value)}
              value={palabraBusqueda}
              autoFocus
            />

            </form>
          </Search>

            {/* </form> */}
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