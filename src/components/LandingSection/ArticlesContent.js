import React from 'react'
import './Articles.css'
export default function ArticlesContent(props) {
    return (
        <div className='articles-content'>
            <div className='disp-flex d-flex'>
                <span className="heart-icont icon">{props.icon}</span>
                <h4 className={`news-heading`}>{props.heading}</h4>
            </div>
            <a href="/" className='title'><h3>{props.title}</h3></a>
            <div>
                <p className='articles-para'>{props.para}</p>
                <a href="/" className='a-read-more'><span>Read More </span><i className="fas fa-chevron-right"></i></a>
            </div>
        </div>
    )
}
