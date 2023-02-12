import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header.js'
import {app} from '../../Base.js'
import { signOut,getAuth } from 'firebase/auth'
import { LoginContext } from '../../Context/LoginContext.js'
function Home({children}) {
  const {user,setUser}=useContext(LoginContext)
  const navigate=useNavigate()
  const auth=getAuth(app)
  const handleSignout=(e)=>{
      signOut(auth).then(()=>{
        setUser(null)
        navigate('/login')
      }).catch((error)=>{
        console.log(error)
      })
  }
  return (
    <> 
    <Header/>
    <div>Hello, {user?user.email:'Guest'}</div>
    <button onClick={handleSignout}>Signout</button>
    {children}
    </>
  )
}

export default Home