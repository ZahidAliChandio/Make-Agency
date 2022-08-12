import React from 'react'
import './WebIntro.css'
import IntroImage from '../../images/web-intro-image.png'
export default function WebIntro() {
  return (
    <div className='web-intro-section'>
      <div className="i-left text-content">
        <div className="i-heading">
          <span className='outline-txt'> WEBSITE</span>
          <span className='bold-agency'> AGENCY</span>
        </div>
        <div className="para-container">
          <span className='websites-para'>Double-digit increases in traffic. Award-winning designs. 99% uptime. Expertise in 10+ dev technologies and platforms. Oh, and 100% of clients have given us 5-star Google reviews. </span>
          <span className='websites-para'>
            We don’t just make websites – we make websites that achieve great things.</span>
        </div>
        <a href="/" className='yellow-button btn'>Get in touch</a>
      </div>
      <img src={IntroImage} alt="PhoneLaptop" />
    </div>
  )
}

