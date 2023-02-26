import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Categorias from './components/Categorias';
import Publicidad from './components/Publicidad';
import Articulo from './components/Articulo';
import Slider from './components/Slider';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { useQuery } from 'react-query';
import axios from 'axios';
import { enviroment } from '../../enviroment';


const Home = () => {


  
  const useOfertas = ()=>{
    return useQuery("ofertas", GetOfertasWithAxios) 
  }  
  
  const GetOfertasWithAxios = async () => {
  
    const { data } = await axios.get(`${enviroment.urlBaseBack}/oferta`) 
    return data;
  }
  

  const navigate = useNavigate();
 
        const { data ,isLoading , error, isFetching } = useOfertas()
      // const [ofertasList,setOfertasList] = useState(data.ofertas)

      const publicidad = {
        title: '',
        description:
          "",
        image: 'https://i0.wp.com/ratamundo.com/wp-content/uploads/2020/07/2020-07-26-mastercard-slider-mastercard-desk-2407v2-1-e1595790707466.png?resize=570%2C200&ssl=1',
        imageText: '',
        linkText: '',
      };

      const slider = {
        title: '',
        description:
          "",
        image: 'https://images.vexels.com/content/221648/preview/black-friday-sale-web-slider-design-231dea.png',
        imageText: '',
        linkText: '',
      };

      const handleOnClickSolicitarTurno = ()=>{
        navigate('/solicitar-turno',{
          replace:true
      });
      }

      const handleOnClickCrearTurno = ()=>{
        navigate('/crear-turno',{
          replace:true
      });
      }
     

      if(isLoading) return "Loading"
    
     if(error)return "An error has occurred: " + error.message;

    return (
        <>
        <CssBaseline />
      <Container maxWidth="lg">
      <Slider post={slider} />
        <Categorias title="Blog"/>
        <main>
          <Publicidad post={publicidad} />
          <Grid container spacing={4}>
            {
              isFetching ?(<></>):
              (
                data?.ofertas.map((oferta,i) => (
                  <Articulo key={i} post={oferta} />
                  ))
              ) 
            }
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
        <Button onClick={()=>handleOnClickCrearTurno()}> Crear turno </Button>
        <Button onClick={()=>handleOnClickSolicitarTurno()}> Solicitar turno </Button>

      </Container>
        </>
    );
};

export default Home;