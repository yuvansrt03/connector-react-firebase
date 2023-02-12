import React,{useContext} from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'
const PrivateRouter=({children})=> {
    const {IsLoggedIn}=useContext(LoginContext)
    return IsLoggedIn ? children : <Navigate to="/login" />;
}
export default PrivateRouter