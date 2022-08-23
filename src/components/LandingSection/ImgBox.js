import React from 'react'
import './Boxes.css'
function ImgBox(props) {
    return (
        <div className='l-transtional-img-box transitional-box'>
            <div className='changeBg'></div>
            <div className="bg-container">
                < img src={props.content} alt="transitional-image" />
            </div>
            <div className="overlaper">
                <div className="overlaper-content">
                    <h1 className='heading'>{props.overlaperHeading}</h1>
                    {!(props.overlaperContent === '') && <p>{props.overlaperContent}</p>}
                    {!(props.overlaperAnchor === '') &&
                        <div className="overlayer-btn-container">
                            <a href="/" className='button overlaper-btn transitional-btn'>{props.overlaperAnchor}</a>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default ImgBox
