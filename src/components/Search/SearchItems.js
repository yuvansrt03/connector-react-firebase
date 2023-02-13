import React from 'react'
import './SearchItems.css'
import user_logo from '../Images/user_logo.png'
import view_eye from '../Images/eye.png'
import connect_link from '../Images/link.png'
import { useNavigate } from 'react-router-dom'
function SearchItems(props) {
  const navigate=useNavigate()
  return (
    <div className="search-item-container">
        <div className="search-user-blue-container">
          <img className="search-profile-pic" src={user_logo} alt="user_logo"/>
        </div>
        <div className="search-user-details">
          <h2>User Name</h2>
          <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas illo ullam libero, nobis blanditiis accusamus!</h5>
          <div className="search-view-connect-btn">
            <button className="search-view-btn" >
              <img src={view_eye} alt="view" />
              View
            </button>
            <button className="search-connect-btn">
              <img src={connect_link} alt="connect" />
              Connect
            </button>
          </div>
        </div>
    </div>
  )
}

export default SearchItems