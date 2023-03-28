import { Navigate, Route,Routes } from "react-router-dom"
import LoginPage from '../auth/pages/LoginPage'
import Dashboard from "../pages/Dashboard/components/Dashboard"
import Home from "../pages/Home/HomePage"
 import Navbar from "../ui/components/Navbar"
import BusquedaPage from "../pages/Busqueda/BusquedaPage"
import Perfil from "../pages/Perfil/Perfil"
import SolicitarTurno from "../pages/Turno/SolicitarTurno"
import CrearTurno from "../pages/Turno/CrearTurno"
import DetalleOferta from "../pages/DetalleOferta/DetalleOferta"
import Meeting from "../pages/Meeting/Meeting"
import LoginEmbajador from "../auth/pages/LoginEmbajadorPage"


export const AppRouter = () =>{

    return(
        <>
<Navbar>

</Navbar>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bienvenido" element={<Dashboard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/search" element={<BusquedaPage/>} />
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path= "/solicitar-turno" element={<SolicitarTurno/>}/>
        <Route path= "/crear-oferta" element={<CrearTurno/>}/>
        <Route path= "/detalle-oferta" element={<DetalleOferta/>}/>
        <Route path= "/meeting" element={<Meeting/>}/>
        <Route path= "/login-embajador" element={<LoginEmbajador/>}/>
        <Route path="/" element={<Navigate to="/"/>}/>
        <Route/>
    </Routes>
        </>  
    )
}