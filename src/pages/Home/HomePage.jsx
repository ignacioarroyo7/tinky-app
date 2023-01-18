import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import Categorias from './components/Categorias';
import Publicidad from './components/Publicidad';
import Articulo from './components/Articulo';
import Slider from './components/Slider';
// import Main from './Main';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const Home = () => {

    const sections = [
        { title: 'Fitness', url: '#' },
        { title: 'Psícologo', url: '#' },
        { title: 'Idioma', url: '#' },
        { title: 'Academíco', url: '#' },
        { title: 'Otros', url: '#' },
      ];
      
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
      ];
      
    //   const posts = [post1, post2, post3];
      
    //   const sidebar = {
    //     title: 'About',
    //     description:
    //       'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    //     archives: [
    //       { title: 'March 2020', url: '#' },
    //       { title: 'February 2020', url: '#' },
    //       { title: 'January 2020', url: '#' },
    //       { title: 'November 1999', url: '#' },
    //       { title: 'October 1999', url: '#' },
    //       { title: 'September 1999', url: '#' },
    //       { title: 'August 1999', url: '#' },
    //       { title: 'July 1999', url: '#' },
    //       { title: 'June 1999', url: '#' },
    //       { title: 'May 1999', url: '#' },
    //       { title: 'April 1999', url: '#' },
    //     ],
    //     social: [
    //       { name: 'GitHub', icon: GitHubIcon },
    //       { name: 'Twitter', icon: TwitterIcon },
    //       { name: 'Facebook', icon: FacebookIcon },
    //     ],
    //   };

    return (
        <>
        <CssBaseline />
      <Container maxWidth="lg">
      <Slider post={slider} />
        <Categorias title="Blog" sections={sections} />
        <main>
          <Publicidad post={publicidad} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Articulo key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
        </>
    );
};

export default Home;