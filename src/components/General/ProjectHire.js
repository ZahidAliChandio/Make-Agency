import React from 'react'
import BgImage from '../../images/project-hire-bg.jpg'
import './ProjectHire.css'
export default function ProjectHire() {
    return (
        <div id='project-hire-container'>
            <div className="ph-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            </div>
            <div className="ph-text-content">
                <div className="ph-left inner-text-container">
                    <span className="w-heading">
                        Start your project
                    </span>
                    <a href="/" className='button overlaper-btn transitional-btn'>Submit Your Brief</a>
                </div>
                <div className="ph-right inner-text-container">
                    <span className="w-heading">
                        We're hiring
                    </span>
                    <a href="/" className='button overlaper-btn transitional-btn'>Join the team</a>
                </div>
            </div>
        </div>
    )
}
