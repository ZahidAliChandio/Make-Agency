import React from 'react'
import './Boxes.css'
function ImgBox(props) {
    return (
        <div className='l-transtional-img-box transitional-box'>
            <div className='changeBg'></div>
            < img src={props.content} alt="transitional-image" />
            <div className="overlaper">
                <h1 className='heading'>{props.overlaperHeading}</h1>
                {!(props.overlaperContent === '') && <p>{props.overlaperContent}</p>}
                {!(props.overlaperAnchor==='') &&
                <a href="/" className='button overlaper-btn l-transitional-btn'>{props.overlaperAnchor}</a>}
            </div>
        </div>
    )
}

export default ImgBox
