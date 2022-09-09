import React from 'react'
import './ArrowedImage.css'
export default function ArrowedImage(props) {
    return (
        <div id='arrowed-image-container'>
            <div className='arrowed-bg-image hero' style={{ backgroundImage: `url(${props.bgImage})` }}>
                <div className="overlay black-overlay">
                </div>
                <div className="wrapper padding-x-half arrowed-text-container">
                    <div className="inner-hero">
                        <h1><p>{props.title}</p></h1>
                        <div className="subtitle"><p>{props.subtitle}</p>
                        </div>
                        {props.Anchor && <a href="/" className='btn'>Explore</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}
