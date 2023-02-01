import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';



const Opinion = (props) => {

    const {nombre, comentario, puntaje} = props

    return (
        <Container maxWidth="sm" sx={{borderRadius:0.5,borderBottom: '1px solid #999999'}}>
            
            <Typography>
                {nombre}
            </Typography>
            <Rating name="rating-read-only" value={puntaje} readOnly />
            <Typography>
                {comentario}
            </Typography>
      </Container>
    )
}

export default Opinion