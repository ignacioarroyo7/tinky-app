import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';



const Opinion = (props) => {

    const {nombre, comentario, puntaje} = props

    return (
        <Container maxWidth="sm" sx={{display:'inline-block',alignItems:'center', justifyContent: 'center', borderRadius:0.5,borderBottom: '1px solid #999999'}}>
            
            <Typography display="block" gutterBottom>
                {nombre}
            </Typography>
            <Rating name="rating-read-only" value={puntaje} readOnly />
            <Typography variant='caption' display='block' gutterBottom>
                {comentario}
            </Typography>
      </Container>
    )
}

export default Opinion