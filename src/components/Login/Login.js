import React,{useState,useContext} from 'react'
import {app} from '../../Base.js'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { LoginContext } from '../../Context/LoginContext.js'

import brand_logo_white from './Images/connector_white.png'
import landing_left_illus from './Images/landing_left.png'
import user_logo from './Images/user.png'
import password_logo from './Images/padlock.png'
import google_logo from './Images/google.png'
import facebook_logo from './Images/facebook.png'
import twitter_logo from './Images/twitter.png'
import linkedin_logo from './Images/linkedin.png'



function Login() {
  const {setUser}=useContext(LoginContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [Err,setErr]=useState('')
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
      setErr(err.message)
    }

  }

  return (
    <div className="login">
      <div className="login-left-panel">
        <div className="login-left-desc-container">
          <div className="login-big-circle"></div>
          <img src={brand_logo_white} className="login-left-logo"alt="" />
          <h2>New Here?</h2>
          <h3>To connect with your like minded buddies login with your personal info</h3>
          <button className='login-left-signup'>SIGN UP</button>
          <img src={landing_left_illus} className="login-left-landing-illus" alt="" />
        </div>
      </div>
      <div className="login-right-panel">
          <div className="login-sign-in-text">Sign In</div>
          <div className="login-input-div">
            <img  src={user_logo}className="login-username-logo" alt="" />
            <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="login-input-div">
            <img  src={password_logo}className="login-password-logo" alt="" />
            <input type="Password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <button className="login-button" onClick={handleSubmit}>LOGIN</button>
        {Err && <span className='login-error'>{Err}</span>}
        <h3>Or Sign in with social platforms</h3>
        <div className="login-socialicons-list">
            <span className="login-iconso"><img src={google_logo}   className="login-icon-images"/></span>
            <span className="login-iconso"><img src={facebook_logo} className="login-icon-images" /></span>
            <span className="login-iconso"><img src={twitter_logo}  className="login-icon-images"/></span> 
            <span className="login-iconso"><img src={linkedin_logo} className="login-icon-images"/></span>
          </div>
      </div>
    </div>
  )
}

export default Login