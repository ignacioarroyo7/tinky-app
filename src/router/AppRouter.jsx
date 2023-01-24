import { Navigate, Route,Routes } from "react-router-dom"
import LoginPage from '../auth/pages/LoginPage'
import Dashboard from "../pages/Dashboard/components/Dashboard"
import Home from "../pages/Home/HomePage"
 import Navbar from "../ui/components/Navbar"
import BusquedaPage from "../pages/Busqueda/BusquedaPage"
import Perfil from "../pages/Perfil/Perfil"


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
        <Route path="/" element={<Navigate to="/"/>}/>
        <Route/>
    </Routes>
        </>  
    )
}