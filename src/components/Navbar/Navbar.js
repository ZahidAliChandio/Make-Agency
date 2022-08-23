import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'
import {FaAngleDown } from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav id="nav-container" className='bg-black'>
      <a id="logo" href="/" ><i> MAKE</i></a>
      <div id="navbar">
        <li className="item" id="item1"><Link className="nav-item nav-item-color" to="/about">About Us</Link></li>
        <div className="dropdown">
          <li className="item dropbtn" id="item1"><a className="nav-item active" href="/">Our Services</a>
          <i className="fa-solid fa-caret-down"></i>
            <div className="dropdown-content">
              <Link to="/website">Websites</Link>
              <a href="/">Social Media</a>
              <a href="/">Creative Content</a>
              <a href="/">Paid Marketing</a>
              <a href="/">Search & SEO</a>
            </div>
          </li>
        </div>
        <li className="item" id="item2"><Link className="nav-item nav-item-color" to="/case-studies">Case Studies</Link></li>
        <li className="item" id="item3"><a className="nav-item nav-item-color" href="/">Blog</a></li>
        <li className="item" id="item4"><Link className="nav-item nav-item-color" to="/careers">Careers</Link></li>
        <li className="item" id="item4"><a className="nav-item nav-item-color" href="/">Contact Us</a></li>
      </div>
      <Link className='btn yellow-button' id='nav-yellow-btn' to="/start-project">Start Your Project</Link>
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
