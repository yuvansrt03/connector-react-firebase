import React,{useContext,useState} from 'react'
import './SignUp.css'
import { LoginContext } from '../../Context/LoginContext'
import { useNavigate } from 'react-router-dom'
import {app} from '../../Base.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
function SignUp() {
    const navigate=useNavigate()
    const {email,setEmail} =useContext(LoginContext)
    const [password,setPassword]=useState('')
    const handleSubmit=e=>{
        e.preventDefault()
        const authentication = getAuth(app);
        createUserWithEmailAndPassword(authentication, email, password).then((response) => {
         console.log(response)
         navigate('/login')
          }).catch((error)=>{
            alert(error.message)
          })
          
    }
  return (
    <form className="container" onSubmit={handleSubmit}> 
        <div className="page-header">SignUp</div>
        <input type="text" placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
        <input type="Password" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default SignUp