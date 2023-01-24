import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Articulo from './components/Articulo';
import Slider from './components/Slider';


const BusquedaPage = () => {


      const slider = {
        title: '',
        description:
          "",
        image: 'https://images.vexels.com/content/221648/preview/black-friday-sale-web-slider-design-231dea.png',
        imageText: '',
        linkText: '',
      };
      
      const featuredPosts = [
        {
          title: 'Psícologa Profesional',
          date: '20 u$s por hora',
          description:
            'UBA -  Terapia, adultos, adolescentes, parejas',
          image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
          imageLabel: 'Image Text',
        },
        {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
          {
            title: 'Psícologa Profesional',
            date: '20 u$s por hora',
            description:
              'UBA -  Terapia, adultos, adolescentes, parejas',
            image: 'https://www.shutterstock.com/image-photo/geriatric-psychology-mental-therapy-old-260nw-1433830370.jpg',
            imageLabel: 'Image Text',
          },
      ];


    return (
        <>
        <CssBaseline />
      <Container maxWidth="lg">
      <Slider post={slider} />
        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Articulo key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
        </>
    );
};

export default BusquedaPage;