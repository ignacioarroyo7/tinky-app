import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Box } from '@mui/system';
import { Card, CardActionArea, CardContent, Icon } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PendingIcon from '@mui/icons-material/Pending';

const sections = [
  { title: 'Fitness', url: '#', icon: <FitnessCenterIcon/>  },
  { title: 'Psícologo', url: '#',icon: <PsychologyIcon/>  },
  { title: 'Idioma', url: '#',icon: <LanguageIcon/>  },
  { title: 'Academíco', url: '#',icon: <SchoolIcon/>  },
  { title: 'Otros', url: '#',icon: <PendingIcon/>  },
];


const Categorias = () => {




    return (
        <>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ my:4, justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section,i) => (
          <div key={i}>
      <CardActionArea>
      <Card sx={{ display: 'flex' }}>
      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box>
          <Typography component="h6" variant="h6">
          <Icon>{section.icon} </Icon>
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
        
          
          </div>
        ))}
      </Toolbar>
        </>
    );
};

/*Categorias.propTypes = {
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
  };
*/
export default Categorias;