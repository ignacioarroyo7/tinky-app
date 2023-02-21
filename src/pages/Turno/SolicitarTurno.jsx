import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Horarios from '../../components/Horarios/Horarios';
import { Container, Grid } from "@mui/material";
import { Box } from '@mui/system';


const SolicitarTurno = () => {

    return (
        <>
         <CssBaseline />
      {/* <Container width="lg">
        <HorarioRow></HorarioRow>

      </Container> */}
      <Container maxWidth='lg'>
        <Grid >

        <Box sx={{py:4}}>
        <Horarios></Horarios>
        </Box>
        </Grid>
      </Container>
        </>
    );
};

export default SolicitarTurno;
