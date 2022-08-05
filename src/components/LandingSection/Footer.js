import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import './Footer.css'

function Footer() {
    return (
        <div id='footer'>
            <div className="nav-container">
                <span className='copyright-txt'>Copyright Make Agency 2022</span>
                <ul id='footer-nav'>
                    <li><a href="/">Website Maintenance</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms and Conditions</a></li>
                </ul>
            </div>
            <div id="icons">
                <a href="/" className='footer-icons'> <AiOutlineInstagram
                    size={20}
                    className='react-icon'
                /></a>
                <a href="/" className='footer-icons'> <AiOutlineTwitter
                    size={20}
                    className='react-icon'
                /></a>
                <a href="/" className='footer-icons'> <AiFillFacebook
                    size={20}
                    className='react-icon'
                />
                </a>
                <a href="/" className='footer-icons'> <AiOutlineLinkedin
                    size={20}
                    className='react-icon'
                /></a>
                <a href="/" className='footer-icons'> <AiOutlineLinkedin
                    size={20}
                    className='react-icon'
                /></a>
            </div>
        </div>
    )
}

export default Footer
