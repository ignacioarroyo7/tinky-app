import { Container, FormControl, MenuItem, Select } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {useState} from 'react';
import TextField from '@mui/material/TextField';


const diasSemana = [
    {nombre: 'Domingo', valor:0},
    {nombre: 'Lunes', valor:1},
    {nombre: 'Martes', valor:2},
    {nombre: 'Miercoles', valor:3},
    {nombre: 'Jueves', valor:4},
    {nombre: 'Viernes', valor:5},
    {nombre: 'Sabado', valor:6}
]

const HorarioRow = () => {

    const [horaInicio, setHorainicio] = useState(null);
    const [horaFin, setHorafin] = useState(null);
    const [dia,setDia] = useState(0)
    const [duracion,setDuracion] = useState(1)

    const handleDay = (evt) => {
        setDia(evt.target.value)
    }

    const handleHoraInicio = (value) => {
        setHorainicio(value)
    }
    
    const handleHoraFin = (value) => {
        setHorafin(value)
    }

    const handleDuracion = (evt) => {
        setDuracion(evt.target.value)
    }

    return(
        <Container>
            <FormControl>
                <Select
                    value={dia}
                    onChange={handleDay}>
                    {diasSemana.map(dia =>{
                        return <MenuItem value={dia.valor}>{dia.nombre}</MenuItem>
                    })}
                </Select>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={horaInicio}
                    onChange={handleHoraInicio}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={horaFin}
                    onChange={handleHoraFin}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={duracion}
                  onChange={handleDuracion}
                />
            </FormControl>
        </Container>
    )
}

export default HorarioRow;