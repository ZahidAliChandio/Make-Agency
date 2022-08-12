import React from 'react'
import './Articles.css'
export default function ArticlesContent(props) {
    return (
        <div className='articles-content'>
            <div className='disp-flex d-flex'>
                {/* <span className="heart-icont icon">{props.icon}</span> */}
                <h4 className={`news-heading ${props.icon.displayName}==='AiOutlineHeart'?'color-blue':''`}>{props.heading}</h4>
            </div>
            <a href="/" className='title'><h3>{props.title}</h3></a>
            <div>
                <p>{props.para}</p>
                <a href="/" className='a-read-more'>Read More</a>
            </div>
        </div>
    )
}
