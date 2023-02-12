import React,{useState,useEffect} from 'react'
import { LoginContext } from './LoginContext.js'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import {app} from '../Base.js'
function AuthContextProvider({children}) {
  const auth=getAuth(app)
  const [user,setUser]=useState({})
  useEffect(() => {
    onAuthStateChanged(auth,item=>{
      setUser(item)
    })
  }, [auth]);
  return (
    <LoginContext.Provider value={{user,setUser}}>
      {children}
    </LoginContext.Provider>
  ) 
}

export default AuthContextProvider