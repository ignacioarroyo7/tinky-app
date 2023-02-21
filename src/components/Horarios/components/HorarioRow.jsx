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

  return (
    <>
      <Box width='lg' sx={{ flexGrow: 12}}>
        <Grid container spacing={2}>
          <FormControl width='lg' sx={{width:'100%' }}>
            <Grid item xs={4}>
              <Item>
                <Select value={dia} onChange={handleDay}>
                  {diasSemana.map((dia) => {
                    return <MenuItem value={dia.valor}>{dia.nombre}</MenuItem>;
                  })}
                </Select>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={horaInicio}
                    onChange={handleHoraInicio}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={horaFin}
                    onChange={handleHoraFin}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={duracion}
                  onChange={handleDuracion}
                />
              </Item>
            </Grid>
          </FormControl>
        </Grid>
      </Box>
    </>
  );
};

export default HorarioRow;
