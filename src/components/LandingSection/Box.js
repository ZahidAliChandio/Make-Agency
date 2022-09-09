import React from 'react'
export default function Box(props) {
    return (
        <React.Fragment>
            {!(props.content == null) && <a href="/" className='img-box box' >
                <div className="bg-container" style={{ backgroundImage: `url(${props.content})` }}>
                </div>
                <div className="overlayer">
                    <h1 className='heading'>{props.overlaperHeading}</h1>
                    {!(props.overlaperContent === '') && <p>{props.overlaperContent}</p>}
                    {!(props.overlaperAnchor === '') &&
                        <button href="/" className='btn overlaper-btn transitional-btn'>{props.overlaperAnchor}</button>
                    }
                </div>
            </a>}
            {
                (props.content == null) && <a href="/" className='content-box box'>
                    <p>{props.text}</p>
                    <button href="/" className='transitional-btn btn'>{props.btnText}</button>
                </a>
            }
        </React.Fragment>
    )
}
