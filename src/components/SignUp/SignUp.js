import React,{useContext,useState} from 'react'
import './SignUp.css'
import { LoginContext } from '../../Context/LoginContext'
import { useNavigate } from 'react-router-dom'
import {app} from '../../Base.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
function SignUp() {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const authentication = getAuth(app);
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
          const res =await createUserWithEmailAndPassword(authentication,email,password)
          console.log(res)
          navigate('/')
        }
        catch(err){
          alert(err.message)
        }
          
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