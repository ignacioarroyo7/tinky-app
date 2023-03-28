import * as React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom"

const Articulo = (props)=> {
  const navigate = useNavigate();
  const handleOnClickDetalleOferta = (id)=>{
    // debugger
    console.log("Oferta Id seleccionado", id)
    navigate(`/detalle-oferta`,{
      replace:true,
      state: {
        ofertaId:id
      }
  });
  }
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#" onClick={()=>handleOnClickDetalleOferta(post.Id)}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.TituloOferta}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.NombreEmbajador}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.NombreCategoria}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Ver en detalle...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            // image={'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg'}
            alt={`Imagen ${post.TituloOferta} de ${post.NombreEmbajador}`}
            src={post.Imagen==null?'https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000':post.Imagen}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

// Articulo.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Articulo;