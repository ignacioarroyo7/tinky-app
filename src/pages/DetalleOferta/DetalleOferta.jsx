import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const opiniones = [
  {nombre:'Ignacio Arroyo', puntaje: 4, comentario: 'Excelente Profesional'},
  {nombre:'Juan Pablo Soria', puntaje: 5, comentario: 'Sin comentarios muy buen servicio'},
  {nombre:'Omar Rivas', puntaje: 2, comentario: 'Llega tarde a las reuniones'},
]


const DetalleOferta = () => {

    return (
        <>
        <CssBaseline />
      <Container maxWidth="lg">
      
        <Card>
        <Grid container padding={4}>
          <Grid item xs={8}>
          <Stack direction="row" spacing={2} sx={{ my: 4 }}>
      <Typography component="h2" variant="h5">
      María Soler / Psícologa Profesional
            </Typography>
      </Stack>    
        <Stack direction="row"
         spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 200, height: 200 }}
      />
    </Stack>
          </Grid>
          <Grid item xs={4}>
          <Stack direction="row" spacing={2} sx={{ my: 4 }}>
      <Typography component="h2" variant="h5">
      María Soler / Psícologa Profesional
            </Typography>
      </Stack>    
          </Grid>
        </Grid>
    <Stack direction="row" justifyContent="center" spacing={2} sx={{ my: 4 }}>

<Box sx={{border:1, borderColor:'#e0ebeb', borderRadius:5}} padding={5} margin={3} width={'100%'} direction="row" justifyContent="center">
<Typography marginBottom={5} marginLeft={5} variant='h5'>
                Otras publicaciones del mismo profesional
              </Typography>
      <Grid direction="row" justifyContent="center" container width={'100%'}>
        <Grid item xs={3} sx={{mx:2}}>
        <CardActionArea>
            <Card>
            <CardContent>
              <Typography>
                Otra publicacion
              </Typography>

            </CardContent>
            </Card>
        </CardActionArea>
        </Grid>
        <Grid item xs={3} sx={{mx:2}}>
        <CardActionArea>
            <Card>
            <CardContent>
              <Typography>
                Otra publicacion
              </Typography>

            </CardContent>
            </Card>
        </CardActionArea>
        </Grid>
        <Grid item xs={3} sx={{mx:2}}>
        <CardActionArea>
            <Card>
            <CardContent>
              <Typography>
                Otra publicacion
              </Typography>

            </CardContent>
            </Card>
        </CardActionArea>
        </Grid>
      </Grid>
</Box>

            </Stack>           
        </Card>
     
      </Container>
        </>
    );
};

export default DetalleOferta;
