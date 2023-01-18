import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import { FitnessCenterIcon, PsychologyIcon, FlagIcon, AutoStoriesIcon  } from '@mui/icons-material';
import { FitnessCenterIcon } from '@mui/icons-material';
import { Box } from '@mui/system';
import { flexbox } from '@mui/system';
import { Card, CardActionArea, CardContent } from '@mui/material';


// import { ListIcon  } from '@mui/icons-material/List';




const Categorias = (props) => {
    const { sections, title } = props;
    return (
        <>
{/* <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar> */}
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ my:4, justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section,i) => (
          <>
      <CardActionArea component="a" href="#">
      <Card sx={{ display: 'flex' }}>
      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box>
          <Typography component="h6" variant="h6">
          Icon
      </Typography>
          </Box>
          <Box>
          <Typography component="h2" variant="h5">
          <Link
          style={{ textDecoration: 'none' }}
            color="inherit"
            noWrap
            key={section.title}
            //variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0}}
          >
            {section.title}
          </Link>
      </Typography>
          </Box>
        </Box>
      </CardContent>
      </Card>
      </CardActionArea>
        
          
          </>
        ))}
      </Toolbar>
        </>
    );
};

Categorias.propTypes = {
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
  };

export default Categorias;