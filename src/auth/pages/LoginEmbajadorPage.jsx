import * as React from "react";
// import useContext from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { enviroment } from "../../enviroment";
import { useEffect } from "react";
import { useState } from "react";
import useSessionStorage from "../../hooks/useSessionStorage";
// import { AuthContext } from '../context/AuthContext'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Tinky
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const theme = createTheme({
  palette: {
      type: 'light',
      primary: {
        main: '#e86b28',
      },
      secondary: {
        main: '#fdbc22',
      },
      warning: {
        main: '#ffea00',
      },
      background: {
        default: '#e7e8ea',
      },
    },
});

const LoginEmbajador = () => {

  // const [urlBaseBack,setUrlBaseBack] = useState(enviroment.urlBaseBack)
  const { login, logged } = useContext(AuthContext);
  const [tokenUser, setTokenUser] = useSessionStorage('token','')
  const [userIsCliente, setUserIsClient] = useSessionStorage('client','')

  // useEffect(()=>{
  //     console.log(urlBaseBack+"/api/auth/login")
  // },[])


  console.log(logged);
  // const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const baseURL = `${enviroment.urlBaseBack}/auth/login`;


  const iniciarSesion = (data) => {
    axios
      .post(baseURL, {
        "email": data.email,
        "password": data.password,
        "isCliente": false
      })
      .then((response) => {
        if(response.status===200){
    login(data.email);
          navigate("/", {
              replace: true,
            })
      }
        console.log('response',response)
        console.log('response data',response.data);
        setTokenUser(response.data.token)
        setUserIsClient(false)
      });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //const user = data.get("email");
    const datos = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log('login:',datos)
    iniciarSesion(datos);

    //login(user);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    // login(user);
    // navigate("/", {
    //   replace: true,
    // });
  };

  const toRegister = (event) => {
    event.preventDefault();
    navigate("/register", {
      replace: true,
    });
  };
  const toLoginCliente = (event)=>{
    event.preventDefault();
    navigate("/login", {
      replace: true,
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electronico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
              <Grid container sx={{ mb: 2 }}>
                <Grid item xs>
                  <Link href="#" onClick={toLoginCliente} variant="body2">
                    Ingresar como cliente
                  </Link>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" onClick={toRegister} variant="body2">
                    {"No tienes una cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default LoginEmbajador;
