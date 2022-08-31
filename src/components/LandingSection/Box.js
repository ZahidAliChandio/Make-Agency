import React from 'react'
export default function Box(props) {
    return (
        <>
            {!(props.content == null) && <a href="/" className='l-transtional-img-box box' >
                <div className="bg-container" style={{ backgroundImage: `url(${props.content})` }}>
                </div>
                <div className="overlaper">
                    <div className="overlaper-content">
                        <h1 className='heading'>{props.overlaperHeading}</h1>
                        {!(props.overlaperContent === '') && <p>{props.overlaperContent}</p>}
                        {!(props.overlaperAnchor === '') &&
                            <div className="overlayer-btn-container">
                                <button href="/" className='button overlaper-btn transitional-btn'>{props.overlaperAnchor}</button>
                            </div>
                        }
                    </div>
                </div>
            </a>}
            {
                (props.content == null) && <a href="/" className='l-transtional-txt-box box'>
                    <p>{props.text}</p>
                    <button href="/" className='transitional-btn button'>{props.btnText}</button>
                </a>
            }
        </>
    )
}
