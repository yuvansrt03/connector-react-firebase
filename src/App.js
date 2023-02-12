import React,{useState,useEffect} from 'react'
import Login from './components/Login/Login.js'
import './App.css'
import Home from './components/Home/Home.js'
import { Route, Routes,Navigate } from 'react-router-dom'
import { LoginContext } from './Context/LoginContext.js'
import PrivateRouter from './PrivateRouter/PrivateRouter.js'
import SignUp from './components/SignUp/SignUp.js'
import Header from './components/Header/Header.js'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import {app} from './Base.js'
function App() {
  const auth=getAuth(app)
  const [email,setEmail]=useState('')
  const [IsLoggedIn,setIsLoggedIn]=useState(false)
  useEffect(() => {
    onAuthStateChanged(auth,user=>{
      setEmail(user.email)
    })
  }, []);
  return (
    <LoginContext.Provider value={{email,setEmail,IsLoggedIn,setIsLoggedIn}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </LoginContext.Provider>
  )
}

export default App