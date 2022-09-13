import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function Navbar() {
  const [navChecked, setNavChecked] = useState(false);
  const toggleNavCheck = () => {
    setNavChecked(prev => !prev)
  }
  const [dropDown, setDropDown] = useState('hidden');
  const toggleDropDown = () => {
    if(dropDown==='hidden'){
      setDropDown('visible');
    }else{
      setDropDown('hidden');
    }
  }
  return (
    <nav id="nav-container" className='bg-black padding-x-half'>
      <a id="logo" href="/" ><i> MAKE</i></a>
      <div className="wrapper nav-wrapper">
        <div id="navbar" className="full-bleed" style={{ display: !navChecked ? 'flex' : 'none' }}>
          {/* <div id="navbar" className="full-bleed" style={{visibility:!checked?'visible':'hidden'}}> */}
          <li className="item" id="item1"><Link className="nav-item nav-item-color" to="/about">About Us</Link></li>
          <li className="item dropbtn dropdown" id="item2"><a className="nav-item active" href="/"><span className='flex-1'>Our Services</span></a>
            <i className="fa-solid fa-caret-down" onClick={toggleDropDown} />
            <div className={`dropdown-content ${dropDown}`}>
              <Link to="/website">Websites</Link>
              <a href="/">Social Media</a>
              <a href="/">Creative Content</a>
              <a href="/">Paid Marketing</a>
              <a href="/">Search & SEO</a>
            </div>
          </li>
          <li className="item" id="item2"><Link className="nav-item nav-item-color" to="/case-studies">Case Studies</Link></li>
          <li className="item" id="item3"><a className="nav-item nav-item-color" href="/">Blog</a></li>
          <li className="item" id="item4"><Link className="nav-item nav-item-color" to="/careers">Careers</Link></li>
          <li className="item" id="item4"><a className="nav-item nav-item-color" href="/">Contact Us</a></li>
        </div>
        <Link className='btn yellow-button' id='nav-yellow-btn' to="/start-project" style={{ display: !navChecked ? 'flex' : 'none' }}>Start Your Project</Link>
      </div>
      <div id="nav-toggle-container">
        <label htmlFor="menu-check-box" style={{ color: "white" }}>Click</label>
        <input type="checkbox" name="menu-check" id="menu-check-box" onClick={toggleNavCheck} style={{ display: 'none' }} />
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  siteTitle: PropTypes.string
}
// Navbar.propTypes = { logo: PropTypes.string, 
// siteTitle: PropTypes.string }
Navbar.defaultProps = {
  logo: "siteLogo",
  siteTitle: "site Title"
}
