import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext.js'
import Header from '../Header/Header.js'
import {app} from '../../Base.js'
import { signOut,getAuth } from 'firebase/auth'
function Home({children}) {
  const {email,setEmail,setIsLoggedIn}=useContext(LoginContext)
  
  const navigate=useNavigate()
  const auth=getAuth(app)
  const handleSignout=(e)=>{
      signOut(auth).then(()=>{
        setEmail('Guest')
      }).catch((error)=>{
        console.log(error)
      })
  }
  return (
    <> 
    <Header/>
    <div>Hello, {email}</div>
    <button onClick={handleSignout}>Signout</button>
    {children}
    </>
  )
}

export default Home