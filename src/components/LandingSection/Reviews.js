import React from 'react'
import googleImg from '../../images/google.png'
import ReactStars from 'react-stars'
import './Reviews.css'

function Reviews() {
    return (
        <div id='review-section'>
            <img src={googleImg} alt="Google" />
            <ReactStars
                className='review-stars'
                size={16}
                edit={false}
                color1='#ffd700'
            />
            <div className="review-content">
                <div className='review-container'></div>
                <div className='review-author'></div>
            </div>
        </div>
    )
}

export default Reviews
