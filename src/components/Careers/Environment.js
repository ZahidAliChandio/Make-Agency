import React from 'react'
import './Environment.css'
import CareersCulture from '../../images/careers-culture.jpg'
import MakePerks from '../../images/about-bg-image.jpg'
export default function Environment() {
    return (
        <div id='environment-container'>
            <div className='w-sectional-css'>
                <div className="c-dup-portion">
                    <div className='c-left c-text-content'>
                        <div className="career-heading">
                            Our Culture
                        </div>
                        <span className='websites-para'>What we do isn’t easy. We get such great projects and client names because we have the skills to deliver something out of the ordinary. We commit to delivering that extraordinary level of creativity and service, so we can live up to our reputation and be proud of the work we put out there.</span>
                        <span className='websites-para'>We encourage new ideas and “What ifs?” We don’t settle for something we’ve done 100 times because “it’s how it’s done”. And we stay plugged into the industry, through books, blogs, magazines, podcasts, conferences and networking – so we’re constantly feeding our creative beasts.</span>
                    </div>
                    <img src={CareersCulture} alt="PhoneLaptop" className='career-img' />
                </div>
                <div className="c-dup-portion">
                    <img src={MakePerks} alt="PhoneLaptop" className='career-img' />
                    <div className='c-right c-text-content'>
                        <div className="career-heading">
                            Our Perks
                        </div>
                        <div className="career-para">
                            <h3 className="career-sub-heading">Personal Development</h3>
                            <span className='websites-para'>What we do isn’t easy. We get such great projects and client names because we have the skills to deliver something out of the ordinary. We commit to delivering that extraordinary level of creativity and service, so we can live up to our reputation and be proud of the work we put out there.</span>
                        </div>
                        <div className="career-para">
                            <h3 className="career-sub-heading">Flexibility</h3>
                            <span className='websites-para'>We encourage new ideas and “What ifs?” We don’t settle for something we’ve done 100 times because “it’s how it’s done”. And we stay plugged into the industry, through books, blogs, magazines, podcasts, conferences and networking – so we’re constantly feeding our creative beasts.</span>
                        </div>
                        <div className="career-para">
                            <h3 className="career-sub-heading">Socials</h3>
                            <span className='websites-para'>Culture is at the forefront of how we work. We’ve got a  diverse and inclusive social calendar, including activities like festive/seasonal parties, cultural celebrations, in-house get-togethers, and big-budget events to have a blast.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}