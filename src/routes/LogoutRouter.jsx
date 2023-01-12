import { Route,Routes } from "react-router-dom"

import { AppRouter } from "../router/AppRouter"
import LoginPage from '../auth/pages/LoginPage'
import RegisterPage from "../pages/Register/Register"
// import Navbar from "../ui/components/Navbar"


export const LogoutRouter = () =>{

    return(
        <>
        {/* <Navbar></Navbar> */}
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/*" element={<AppRouter></AppRouter>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route/>
    </Routes>
        </>  
    )
}