import React from 'react'
import './Articles.css'
export default function ArticlesContent(props) {
    return (
        <div className='articles-content'>
            <h4 className='news-heading'>{props.heading}</h4>
            <a href="/" className='title'><h3>{props.title}</h3></a>
            <div>
                <p>{props.para}</p>
                <a href="/" className='a-read-more'>Read More</a>
            </div>
        </div>
    )
}
