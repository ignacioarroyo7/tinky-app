import React, { useState } from "react";
import {
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Paper,
  Box,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import { borderRadius } from "@mui/system";

const theme = createTheme();





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const diasSemana = [
  { nombre: "Domingo", valor: 0 },
  { nombre: "Lunes", valor: 1 },
  { nombre: "Martes", valor: 2 },
  { nombre: "Miercoles", valor: 3 },
  { nombre: "Jueves", valor: 4 },
  { nombre: "Viernes", valor: 5 },
  { nombre: "Sabado", valor: 6 },
];

const HorarioRow = () => {
  const [horaInicio, setHorainicio] = useState(null);
  const [horaFin, setHorafin] = useState(null);
  const [dia, setDia] = useState(0);
  const [duracion, setDuracion] = useState(1);

  const handleDay = (evt) => {
    setDia(evt.target.value);
  };

  const handleHoraInicio = (value) => {
    setHorainicio(value);
  };

  const handleHoraFin = (value) => {
    setHorafin(value);
  };

  const handleDuracion = (evt) => {
    setDuracion(evt.target.value);
  };


  const handleOnClickCrearTurno = (e)=>{
    console.log('dia:',dia)
    console.log('horaInicio:',horaInicio.$d)
    console.log('horaFin:',horaFin.$d)
    console.log('duracion:',duracion)
    setDia(0)
    setHorainicio(null)
    setHorafin(null)
    setDuracion(1)
  }
  return (
    <>

      <Container sx={{border:1, borderColor:'#e0ebeb', borderRadius:5}} component="main" maxWidth="xs">
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Crear nuevo turno
          </Typography>
          <Box component="form" 
          // onSubmit={handleSubmit}
           noValidate sx={{ mt: 1 }}>
           <Grid item xs={12} sx={{my:3}}>
           <InputLabel id="demo-simple-select-label">Día del turno</InputLabel> 
             <Select value={dia} onChange={handleDay}>
               {diasSemana.map((dia) => {
                 return <MenuItem value={dia.valor}>{dia.nombre}</MenuItem>;
               })}
             </Select>
           
         </Grid>
         <Grid item xs={12} sx={{my:3}}>
         <InputLabel id="demo-simple-select-label">Hora de inicio</InputLabel> 
          
             <LocalizationProvider dateAdapter={AdapterDayjs}>
               <TimePicker
                 value={horaInicio}
                 onChange={handleHoraInicio}
                 renderInput={(params) => <TextField {...params} />}
               />
             </LocalizationProvider>
           
         </Grid>
         <Grid item xs={12} sx={{my:3}}>
         <InputLabel id="demo-simple-select-label">Hora de fin</InputLabel> 
          
             <LocalizationProvider dateAdapter={AdapterDayjs}>
               <TimePicker
                 value={horaFin}
                 onChange={handleHoraFin}
                 renderInput={(params) => <TextField {...params} />}
               />
             </LocalizationProvider>
          
         </Grid>
         <Grid item xs={12} sx={{my:3}}>
         <InputLabel id="demo-simple-select-label">Duración</InputLabel> 
           
             <TextField
               type="number"
               InputLabelProps={{
                 shrink: true,
               }}
               value={duracion}
               onChange={handleDuracion}
             />
           
         </Grid>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
            /> */}
            
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            <Button
            onClick={(e)=>handleOnClickCrearTurno(e)}
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear turno
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
      </Container>
      

    
    </>
  );
};

export default HorarioRow;
