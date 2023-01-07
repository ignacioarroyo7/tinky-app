import { Navigate, Route,Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import {Home} from "../pages/Home/HomePage"

export const AppRouter = () =>{

    return(
        <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bienvenido" element={<Dashboard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<Navigate to="/"/>}/>
        <Route/>
    </Routes>
        </>  
    )
}