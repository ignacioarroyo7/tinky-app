import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Horarios from '../../components/Horarios/Horarios';
import HorarioRow from '../../components/Horarios/components/HorarioRow';
import { Container } from "@mui/material";

const opiniones = [
  {nombre:'Ignacio Arroyo', puntaje: 4, comentario: 'Excelente Profesional'},
  {nombre:'Juan Pablo Soria', puntaje: 5, comentario: 'Sin comentarios muy buen servicio'},
  {nombre:'Omar Rivas', puntaje: 2, comentario: 'Llega tarde a las reuniones'},
]


const SolicitarTurno = () => {

    return (
        <>
         <CssBaseline />
      <Container width="lg">
        <HorarioRow></HorarioRow>

      </Container>
        </>
    );
};

export default SolicitarTurno;
