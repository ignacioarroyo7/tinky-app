import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useState } from "react";


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



const theme = createTheme();

const RegisterCliente = () => {
  const navigate = useNavigate();

  const baseURL = "https://8a14-181-94-58-51.ngrok.io/api/cliente/create";

const singUpCliente =(data)=> {
    axios
    .post(baseURL, {
      "name":data.nombre,
"tel":data.telefono,
"email":data.email,
"estado":1,
"google": 0,
"foto": "",
"password": data.password
    })
    .then((response) => {
        if(response.status==200){
            navigate("/login", {
                replace: true,
              })
        }
        console.log('response',response)
        console.log('response data',response.data);
    });
  }

//   const [nombre,setNombre]=useState('')
//   const [apellido,setApellido]=useState('')
//   const [email,setEmail]=useState('')
//   const [telefono,setTelefono]=useState('')
//   const [descripcion,setDescripcion]=useState('')
//   const [password,setPassword]=useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const datos = {
        nombre: data.get("nombre"),
      apellido: data.get("apellido"),
      email: data.get("email"),
      telefono: data.get("telefono"),
      descripcion: data.get("descripcion"),
      password: data.get("password"),
    }
    // console.log({
    //     nombre: data.get("nombre"),
    //     apellido: data.get("apellido"),
    //     email: data.get("email"),
    //     telefono: data.get("telefono"),
    //     password: data.get("password"),
    //   });
    singUpCliente(datos)
    console.log('nuevo cliente',datos)
//     setNombre('')
//     setApellido('')
//     setEmail('')
//     setTelefono('')
//     setPassword('')
//     setDescripcion('')
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="nombreRegister"
                  label="Nombre"
                  autoFocus
                  //value={nombre}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="apellidoRegister"
                  label="Apellido"
                  name="apellido"
                  autoComplete="family-name"
                  //value={apellido}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="emailRegister"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  //value={email}

                />
              </Grid>
              <Grid item xs={12}>
                {/* <PhoneInput
                value={valuePhone}
                onChange={valuePhone => setValuePhone(valuePhone)} // passed function receives the phone value
                component={TextField}
                /> */}

                <TextField
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  required
                  fullWidth
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="family-name"
                  type="number"
                  //value={telefono}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  //value={password}

                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Regístrate
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  href="#"
                  onClick={navigate("/login", {
                    replace: true,
                  })}
                  variant="body2"
                >
                  Ya tienes una cuenta? Iniciar Sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
export default RegisterCliente;
