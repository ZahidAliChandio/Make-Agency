import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav id="nav-container" className='bg-black'>
      <a id="logo" href="/" >MAKE</a>
      <nav id="navbar">
        <li className="item" id="item1"><a className="nav-item nav-item-color" href="/">About Us</a></li>
        <div className="dropdown">
          <li className="item dropbtn" id="item1"><a className="nav-item active" href="/">Our Services</a>
            <div className="dropdown-content">
              <a href="/">Websites</a>
              <a href="/">Social Media</a>
              <a href="/">Creative Content</a>
              <a href="/">Paid Marketing</a>
              <a href="/">Search & SEO</a>
            </div>
          </li>
        </div>
        <li className="item" id="item2"><a className="nav-item nav-item-color" href="/">Case Studies</a></li>
        <li className="item" id="item3"><a className="nav-item nav-item-color" href="/">Blog</a></li>
        <li className="item" id="item4"><a className="nav-item nav-item-color" href="/">Careers</a></li>
        <li className="item" id="item4"><a className="nav-item nav-item-color" href="/">Contact Us</a></li>
      </nav>
      <a href="/" className='btn yellow-button' id='yellow-btn'>Start Your Project</a>
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
