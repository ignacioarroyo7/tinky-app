import { Route,Routes } from "react-router-dom"

import { AppRouter } from "../router/AppRouter"
import LoginPage from '../auth/pages/LoginPage'
import RegisterPage from "../pages/Register/Register"
// import BusquedaPage from "../pages/Busqueda/BusquedaPage"
// import Navbar from "../ui/components/Navbar"
import LoginEmbajador from "../auth/pages/LoginEmbajadorPage"


export const LogoutRouter = () =>{

    return(
        <>
        {/* <Navbar></Navbar> */}
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path= "/login-embajador" element={<LoginEmbajador/>}/>
        <Route path="/*" element={<AppRouter></AppRouter>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        {/* <Route path="/search" element={<BusquedaPage/>} /> */}
        <Route/>
    </Routes>
        </>  
    )
}