import React from 'react'
import './ArrowImage.css'
import ArrowedImage from '../General/ArrowedImage';
import IntroBgImage from '../../images/landing-intro-background-image.jpg'
const ArrowImage = () => {
    return (
        <React.Fragment>
            <div className='arrow-image-container'>
                    <ArrowedImage
                        bgImage={IntroBgImage}
                        title={'Commercially Creative'}
                        subtitle={'Make is a London-based digital agency. We guarantee results across three key business areas: web design & build, social media & digital marketing, and creative content.'}
                        Anchor={'Explore'} />
            </div>
        </React.Fragment>
    )
}

export default ArrowImage
