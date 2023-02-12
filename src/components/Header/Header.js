import React from 'react'
import { Outlet } from 'react-router-dom'
import './Header.css'
function Login() {
  return (
    <>
    <div className="nav-bar">
        <div className="logo">Connector</div>
        <ul className='nav-bar-items'>
            <a href="/Login">Login</a>
            <a href="/Signup">Signup</a>
        </ul>
    </div>
    <Outlet/>
    </>
  )
}

export default Login