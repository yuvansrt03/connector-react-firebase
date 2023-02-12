import React,{useState,useContext} from 'react'
import {app} from '../../Base.js'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
function Login() {
  const {email,setEmail,setIsLoggedIn,IsLoggedIn}=useContext(LoginContext)
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const authentication = getAuth(app);
    signInWithEmailAndPassword(authentication, email, password).then((response) => {
      console.log(response)
      navigate('/')
      console.log(authentication)
          }).catch((error)=>{
            alert(error.message)
          })
          onAuthStateChanged(authentication, (user) => {
            if (user) {
              setEmail(user.email)
            } else {
              console.log("Guest")
            }
          });
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="page-header">Login</div>
        <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="Password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Login