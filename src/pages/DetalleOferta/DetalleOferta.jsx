import React, { useEffect, useState, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { useLocation, useNavigate } from "react-router-dom";
import { enviroment } from "../../enviroment";
import axios from "axios";
import Chip from "@mui/material/Chip";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ModalSolicitarTurno from "./ModalSolicitarTurno";

const DetalleOferta = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const ofertaFetchRef = useRef(false);
  const ofertaIdRef = useRef(0);

  const [oferta, setOferta] = useState({});
  const [idiomas, setIdiomas] = useState([]);
  const [opiniones, setOpiniones] = useState([]);



  const handleOnClickPerfil = () => {
    navigate("/perfil", {
      replace: true,
    });
  };

  useEffect(() => {
    if (ofertaFetchRef.current) return;
    ofertaFetchRef.current = true;

    const ofertaId = location.state.ofertaId;
    ofertaIdRef.current = ofertaId
    console.log("Oferta en detalle de oferta", ofertaId);
    axios
      .get(`${enviroment.urlBaseBack}/oferta/ofertaId`, {
        params: { ofertaId },
      })
      .then((resp) => {
        const ofertaResp = resp.data.oferta;
        const idiomasResp = resp.data.idiomas;
        const opinionesResp = resp.data.opiniones;

        console.log("promedioOpiniones", ofertaResp.promedioOpiniones);
        setOferta(ofertaResp);
        setIdiomas(idiomasResp);
        setOpiniones(opinionesResp);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Container sx={{mt:1}} maxWidth="lg">
        <Card>
          <Grid container padding={4}>
            <Grid
              item
              xs={8}
              sx={{
                m: 0,
                border: 1,
                borderColor: "#e0ebeb",
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            >
              <Box textAlign={"center"} spacing={2} paddingY={5} paddingX={3}>
                <Typography
                  marginBottom={4}
                  display={"block"}
                  width={"100%"}
                  component="h4"
                  variant="h4"
                >
                  {oferta.TituloOferta}
                </Typography>
                <Typography
                  fontSize={18}
                  marginBottom={1}
                  display={"block"}
                  width={"100%"}
                  component="p"
                  variant="p"
                >
                  {oferta.DescripcionOferta}
                </Typography>
                {/* <Typography
                  fontSize={18}
                  marginBottom={1}
                  display={"block"}
                  width={"100%"}
                  component="p"
                  variant="p"
                >
                  Vamos a trabajar en conjunto para que puedas descrubir tu
                  vocación y elegir tu carrera
                </Typography>
                <Typography
                  fontSize={18}
                  marginBottom={1}
                  display={"block"}
                  width={"100%"}
                  component="p"
                  variant="p"
                >
                  Lo haremos mediante la orientación vocacional, que es un
                  proceso de aprendizaje que implica autoconocernos e
                  identificar nuestros objetivos de vida. Esto nos permite
                  identificar aquellas carreras que se adaptan mejor a nuestra
                  forma de ser.
                </Typography> */}
                <Typography
                  align="center"
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mt: 5 }}
                >
                  {opiniones.length>0?
                  (
                  <Rating name="rating-read-only" value={oferta.promedioOpiniones} readOnly />):(<></>)
                  }
                </Typography>
                <Typography
                  align="center"
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ my: 2 }}
                >
                  {`${opiniones.length} opiniones`}
                </Typography>
                <Typography
                  align="center"
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {idiomas.map((i,key) => {
                    return <Chip sx={{mr:1}} label={i.Nombre} key={key} color="primary" variant="outlined"/>
                    // console.log(i.Nombre)
                  })}
                </Typography>
                <ModalSolicitarTurno ofertaId={ofertaIdRef.current}/>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                borderRight: 1,
                borderTop: 1,
                borderBottom: 1,
                borderColor: "#e0ebeb",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Box textAlign={"center"} spacing={2} paddingY={5}>
                <Typography
                  marginBottom={5}
                  display={"block"}
                  width={"100%"}
                  component="h2"
                  variant="h5"
                >
                  {" "}
                  {oferta.NombreEmbajador}
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 200, height: 200, mx: "auto", my: "5" }}
                  my={5}
                />
                <Typography
                  marginY={5}
                  display={"block"}
                  width={"100%"}
                  component="h2"
                  variant="h5"
                ></Typography>
                <Typography
                  marginY={5}
                  display={"block"}
                  width={"100%"}
                  component="h2"
                  variant="h5"
                >
                  {`$ ${oferta.CostoPorHora} / hr`}
                </Typography>
                <Link
                  href="#"
                  onClick={handleOnClickPerfil}
                  sx={{ my: 5, fontSize: 20 }}
                >
                  Ver perfil en detalle...
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mb: 4 }}
          >
            <Box
              sx={{ border: 1, borderColor: "#e0ebeb", borderRadius: 5 }}
              padding={5}
              margin={3}
              width={"100%"}
              direction="row"
              justifyContent="center"
            >
              <Typography marginBottom={5} marginLeft={5} variant="h5">
                Otras publicaciones que quizás puedan interesarte... <Chip sx={{mr:1}} icon={<LocalOfferIcon/>} label={oferta.NombreCategoria} color="primary" variant="outlined"/>
              </Typography>
              <Grid
                direction="row"
                justifyContent="center"
                container
                width={"100%"}
              >
                <Grid item xs={3} sx={{ mx: 2 }}>
                  <CardActionArea sx={{ width: "220px", height: "240px" }}>
                    <Card sx={{ width: "220px", height: "240px" }}>
                      <CardContent>
                        <Typography>Otra publicacion</Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
                <Grid item xs={3} sx={{ mx: 2 }}>
                  <CardActionArea sx={{ width: "220px", height: "240px" }}>
                    <Card sx={{ width: "220px", height: "240px" }}>
                      <CardContent>
                        <Typography>Otra publicacion</Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
                <Grid item xs={3} sx={{ mx: 2 }}>
                  <CardActionArea sx={{ width: "220px", height: "240px" }}>
                    <Card sx={{ width: "220px", height: "240px" }}>
                      <CardContent>
                        <Typography>Otra publicacion</Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Card>
      </Container>
    </>
  );
};

export default DetalleOferta;
