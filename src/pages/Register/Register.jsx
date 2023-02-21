import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RegisterCliente from './components/RegisterCliente';
import RegisterEmbajador from './components/RegisterEmbajador';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme();

const RegisterPage = () => {
    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return (
        <>
    <ThemeProvider theme={theme}>

        <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Cliente" value="1" />
            <Tab label="Embajador" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <RegisterCliente/>
            </TabPanel>
        <TabPanel value="2">
            <RegisterEmbajador/>
            </TabPanel>
      </TabContext>
    </Box>
    </Container>
    </ThemeProvider>
        </>
    );
};

export default RegisterPage;