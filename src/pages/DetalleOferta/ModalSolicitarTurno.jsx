import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";
import { enviroment } from '../../enviroment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useSessionStorage from '../../hooks/useSessionStorage';
import Swal from 'sweetalert2';




const ModalSolicitarTurno = (props) => {
const Swal = require('sweetalert2')
 
  const [tokenUser, setTokenUser] = useSessionStorage('token','')


    const [open, setOpen] = useState(false);
    const [fecha, setFecha] = useState(null)
    const [horarioSeleccionado, setHorarioSeleccionado] = useState()
    const [horariosDisponiblesList, setHorariosList] = useState([])

    // useEffect(()=>{

    // })


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    

    const handleHorarioSeleccionado = (e) => {
      console.log('e in handleHorarioSeleccionado',e.target.value)
        setHorarioSeleccionado(e.target.value)
      };




    const handleClose = () => {
        setFecha(null)
        setHorariosList([])
        setOpen(false);

    };
    const handleConfirmar = ()=>{
      postReservarTurno()
        console.log('confirmar')
    }


    const config = {
      headers: {
        'x-token': tokenUser
      }
    }

    const postReservarTurno = ()=>{
      const fechaDef = `${fecha.$y}-${fecha.$M}-${fecha.$D} ${horarioSeleccionado}`
      const body = { horaInicio:fechaDef ,ofertaId:props.ofertaId}
      axios
    .post(`${enviroment.urlBaseBack}/turnos`, body, config
    ).then((response)=>{
      const {data} = response
      console.log('data in postReservarTurno',data)
      if(response.status==200){
        handleClose()
        Swal.fire({
          title: 'Reserva',
          text: 'Turno reservado con éxito',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }

    const getTurnosDiponibles = (fechaForm)=>{
        axios
      .get(`${enviroment.urlBaseBack}/turnos`, {
        params: { embajadorId:1, fecha:fechaForm, ofertaId:props.ofertaId },
      }).then((response)=>{
        const {data} = response
        setHorariosList(data.turnosDisponibles)
      })
    }

  return (
    <div>
        <Button
                  sx={{ py: 2, px: 5 }}
                  size="large"
                  variant="contained"
                  endIcon={<EventAvailableIcon />
                }
                onClick={handleClickOpen}
                >
                  Reservar turno
                </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reservar turno</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      sx={{margin:3}}
        label="Fecha deseada"
        value={fecha}
        onChange={(newValue) => {
            const fechaForm = `${newValue.$M}-${newValue.$D}-${newValue.$y}`
          setFecha(newValue);
          getTurnosDiponibles(fechaForm)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    {horariosDisponiblesList.length>0?(<>
    <InputLabel id="demo-simple-select-label">Horario</InputLabel>
        <Select
        fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={horarioSeleccionado}
          label="Horario"
          onChange={(e)=>handleHorarioSeleccionado(e)}
          placeholder='Selecione un horario...'
        >
            {horariosDisponiblesList.map((i,key)=>{
          return <MenuItem key={key} value={i}>{i}</MenuItem>
            })}
          
        </Select>
    </>):<></>}
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirmar}>Reservar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalSolicitarTurno;