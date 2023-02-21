import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom"


const Articulo = (props)=> {
    const navigate = useNavigate();
    const handleOnClickPerfil = ()=>{
      navigate('/detalle-oferta',{
        replace:true
    });
    }


  const { post } = props;


  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#" onClick={handleOnClickPerfil}>
        <Card sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Ver en detalle...
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
          
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Articulo.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Articulo;