import React,{useState,useContext} from 'react'
import {app} from '../../Base.js'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { LoginContext } from '../../Context/LoginContext.js'
function Login() {
  const {setUser}=useContext(LoginContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const authentication = getAuth(app);
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      const res=await signInWithEmailAndPassword(authentication,email,password)
      setUser(res.user)
      navigate('/')
      console.log(res.user)
    }
    catch(err){
      alert(err.message)
    }

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