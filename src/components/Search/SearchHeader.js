import React from 'react'
import './SearchHeader.css'
import { useNavigate } from 'react-router-dom'

import brand_logo from '../Images/logo_blue.png'
import search_icon from '../Images/search_icon.png'
import triangle from '../Images/caret-down.png'


function Search() {
  const navigate=useNavigate()
  const handleLogin=e=>{
    navigate('/login')
  }
  const handleSignup=e=>{
    navigate('/signup')
  }
  return (
    <div className="search-page">
      <div className="search-header">
        <img src={brand_logo} className="brand_logo"alt="connector-white-png" />
        <div className="search-collection">
          <div>
            <img src={search_icon} className="search-collection-icons" alt="" />
            <span>Discover People</span>
          </div>
          <div >
            <img src={triangle} className="search-collection-icons" alt="" />
            <span>Categories</span>
          </div>
          <button className='search-search-btn'>Search</button>
        </div>
        <div className="search-login-signup">
          <button className="search-login" onClick={handleLogin}>
            LOGIN
          </button>
          <button className="search-signup" onClick={handleSignup}>
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search