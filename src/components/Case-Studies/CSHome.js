import React from 'react'
import './CSHome.css'
import CaseStudyBg from '../../images/case-studies-arrow-bg.jpg'
import ArrowedImage from '../General/ArrowedImage'
export default function CSHome() {
    return (
        <div id='case-studies-home'>
            <div className="arrow-image-container">
                <ArrowedImage bgImage={CaseStudyBg} title={"Let the results do the talking"} subtitle={'We’re only as good as the work we produce and the results we achieve for our clients. So here’s a taster of what we’ve been up to recently'} />
            </div>
            {/* <div className="drop-down-container">
                <span className='hover-b-border'>ALL</span>
                <select name="client" id="client-selector" className='case-study-selector'>
                    <option value="option-1" disabled selected>Type of client</option>
                    <option value="option-2">B2B</option>
                    <option value="option-3">B2C</option>
                </select>
                <select name="work" id="work-selector" className='case-study-selector'>
                    <option value="option-1" disabled selected>Type of work</option>
                    <option value="option-2">Content Creation</option>
                    <option value="option-3">Performance Marketing</option>
                    <option value="option-4">Websites</option>
                </select>
            </div> */}
        </div>
    )
}
