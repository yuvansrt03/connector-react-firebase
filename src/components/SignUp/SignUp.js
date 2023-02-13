import React,{useContext,useState} from 'react'
import './SignUp.css'
import { LoginContext } from '../../Context/LoginContext'
import { useNavigate } from 'react-router-dom'
import {app} from '../../Base.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


import brand_logo_white from '../Images/connector_white.png'
import landing_left_illus from '../Images/landing_left.png'
import user_logo from '../Images/user.png'
import password_logo from '../Images/padlock.png'
import google_logo from '../Images/google.png'
import facebook_logo from '../Images/facebook.png'
import twitter_logo from '../Images/twitter.png'
import linkedin_logo from '../Images/linkedin.png'
import email_logo from '../Images/email_logo.png'



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
    <div className='signup-page' style={{overflow:'hidden'}}>
        <div className="signup-left-panel">
          <div className="signup-sign-Up-text">Sign Up</div>
          <div className="signup-input-div">
            <img src={user_logo} className="signup-username-logo" alt="" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="signup-input-div">
            <img src={email_logo} className="signup-email-logo" alt="" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="signup-input-div">
            <img src={password_logo} className="signup-password-logo" alt="" />
            <input type="Password" placeholder="Password" />
          </div>
          <button className="signup-button" onclick="handleSubmit">SIGN UP</button>
          <h3>Or Sign Up with social platforms</h3>
          <div className="signup-socialicons-list">
            <span className="signup-iconso"><img src={google_logo} className="signup-icon-images" /></span>
            <span className="signup-iconso"><img src={facebook_logo} className="signup-icon-images" /></span>
            <span className="signup-iconso"><img src={twitter_logo} className="signup-icon-images" /></span> 
            <span className="signup-iconso"><img src={linkedin_logo} className="signup-icon-images" /></span>
          </div>
        </div>
        <div className="signup-right-panel">
          <div className="signup-right-desc-container">
            <div className="signup-big-circle" />
            <img src={brand_logo_white} className="signup-right-logo" alt="" />
            <h2>Already a member?</h2>
            <h3>Sign in to view your account</h3>
            <button className="signup-right-signin" onClick={()=>navigate('/login')}>SIGN IN</button>
            <img src={landing_left_illus} className="signup-right-landing-illus" alt="" />
          </div>
        </div>
      </div>
  )
}

export default SignUp