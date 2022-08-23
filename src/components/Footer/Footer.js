import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div id='footer'>
            <div className="ul-container">
                <span className='copyright-txt'>Copyright Make Agency 2022</span>
                <ul id='footer-nav'>
                    <li><a href="/">Website Maintenance</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms and Conditions</a></li>
                </ul>
            </div>
            <div id="icons-container">
                <a href="/" className='footer-icons'><i  className="fa-brands icons fa-instagram"></i></a>
                <a href="/" className='footer-icons'> <i className="fa-brands icons fa-twitter"></i></a>
                <a href="/" className='footer-icons'> <i className="fa-brands icons fa-facebook-f"></i></a>
                <a href="/" className='footer-icons'> <i className="fa-brands icons fa-linkedin-in"></i></a>
                <a href="/" className='footer-icons'> <i className="fa-brands icons fa-snapchat"></i></a>
            </div>
        </div>
    )
}
export default Footer
