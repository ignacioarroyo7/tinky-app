import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Toolbar from '@mui/material/Toolbar';
import ErrorIcon from '@mui/icons-material/Error';
import HelpIcon from '@mui/icons-material/Help';
import Opinion from '../../components/Opinion/Opinion';

const opiniones = [
  {nombre:'Ignacio Arroyo', puntaje: 4, comentario: 'Excelente Profesional'},
  {nombre:'Juan Pablo Soria', puntaje: 5, comentario: 'Sin comentarios muy buen servicio'},
  {nombre:'Omar Rivas', puntaje: 2, comentario: 'Llega tarde a las reuniones'},
]


const CrearTurno = () => {

    return (
        <>
        <CssBaseline />
      <Container maxWidth="lg">
      <CardActionArea>
        <Card>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ my: 4 }}>
      <Typography component="h2" variant="h5">
      María Soler / Psícologa Profesional
            </Typography>
      </Stack>    
        <Stack direction="row" justifyContent="center" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 200, height: 200 }}
      />
    </Stack>
    <Stack direction="row" justifyContent="center" spacing={2} sx={{ my: 4 }}>

<Toolbar variant='regular'>
<Typography variant="subtitle1" color="text.secondary">
              215 horas / 304 sesiones
            </Typography>
  <Rating name="rating-read-only" value={4} readOnly />
</Toolbar>

            </Stack>    

      {/* <CardActionArea>
        <Card sx={{ display: 'flex' }}> */}
          <Stack sx={{ my:1, mx:5 }}>
          <Typography variant="h6" color="text.secondary" sx={{ my:1}}>
          Descripcion
            </Typography>
          <Typography variant="subtitle1" paragraph>
              Busco el bienestar completo de mis pacientes. Atiendo a hombres y mujeres.
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="between" sx={{background:'#ffd066'}}>
            <CardContent sx={{flex:1, my:2, }}>
              <Typography sx={{display:'flex',justifyContent: 'center', alignItems: 'center'}}>
              <ErrorIcon/>
                CV
              </Typography>
            </CardContent>
            <CardContent sx={{flex:1, my:2, }}>
            <Typography sx={{display:'flex',justifyContent: 'center', alignItems: 'center'}}>
              <HelpIcon/>
                Opiniones
              </Typography>
            </CardContent>
          </Stack>

          <Stack direction="row" justifyContent="between" >
            <CardContent sx={{flex:1, my:2, }}>
              <Typography paragraph sx={{display:'flex',justifyContent: 'center', alignItems: 'center'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quasi eius, magni, ipsum eum aut accusamus sint earum autem delectus exercitationem odit officiis mollitia fuga tempore fugiat quae porro voluptatem 
                repellat.
              </Typography>
            </CardContent>
            <CardContent sx={{flex:1, my:2, }}>
            <Typography sx={{display:'block',justifyContent: 'center', alignItems: 'center'}}>
                {opiniones.map((op, i) => {
                  return <Opinion nombre={op.nombre} puntaje={op.puntaje} comentario={op.comentario}/>
                })}
              </Typography>
            </CardContent>
          </Stack>
        
        </Card>
      </CardActionArea>
      </Container>
        </>
    );
};

export default CrearTurno;
