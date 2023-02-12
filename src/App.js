import './App.css'
import React from 'react'
import Login from './components/Login/Login.js'
import Home from './components/Home/Home.js'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp.js'
import AuthContextProvider from './Context/AuthContextProvider.js'
function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </AuthContextProvider>  
  )
}

export default App