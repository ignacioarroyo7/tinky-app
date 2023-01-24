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



const Perfil = () => {

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
</Toolbar>

            </Stack>    

      {/* <CardActionArea>
        <Card sx={{ display: 'flex' }}> */}
        <Stack direction="row" justifyContent="between">

        
          <CardContent sx={{flex:1, my:2, }}>
          <Typography align='center' variant="h6" color="text.primary" sx={{ my:1 }}>
          20 u$s por hora
            </Typography>
            <Typography align='center' variant="subtitle1" color="text.primary" sx={{ my:1 }}>
              Argentina
            </Typography>
            <Typography align='center' variant="subtitle1" color="text.primary" sx={{ my:1 }}>
              Capital Federal
            </Typography>
          </CardContent>
          <CardContent sx={{flex:1, my:2, }}>
            <Typography align='center' variant="subtitle1" color="text.secondary" sx={{ my:1 }}>
            <Rating name="rating-read-only" value={4} readOnly />
            </Typography>
            <Typography align='center' variant="subtitle1" color="text.secondary" sx={{ my:1 }}>
              8.0 / 10
            </Typography>
            <Typography align='center' variant="subtitle1" color="text.secondary" sx={{ my:1 }}>
              (2100 opiniones)
            </Typography>
            <Typography align='center' variant="subtitle1" color="text.secondary" sx={{ my:1 }}>
              ESP / ING
            </Typography>
          </CardContent>
          </Stack>
          <Stack sx={{ my:1, mx:5 }}>
          <Typography variant="h6" color="text.secondary" sx={{ my:1}}>
          Descripcion
            </Typography>
          <Typography variant="subtitle1" paragraph>
              Busco el bienestar completo de mis pacientes. Atiendo a hombres y mujeres.
            </Typography>
          </Stack>
        </Card>
      </CardActionArea>
      </Container>
        </>
    );
};

export default Perfil;