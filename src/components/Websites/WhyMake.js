import React from 'react'
import './WhyMake.css'
import Boy from '../../images/why-make-boy.png'

export default function WhyMake() {
    return (
        <div className='s-whymake-section w-sectional-css'>
            <div className="w-dup-portion">
                <div className='left text-content'>
                    <div className="w-heading why-make-heading">
                        WHY CHOOSE MAKE
                    </div>
                    <span className='websites-para'>We’re virtuosos in distilling complicated requirements into slick user journeys, a logical site map and a back-end that’s easy to manage today and as your team’s needs evolve. That way, your site achieves both commercial and operational goals – and you get a result that’s future proof and delivers ongoing ROI.</span>
                    <span className='websites-para'>We have an impressive in-house team that specialises in design and development for every website type you can think of, including microsites, brochure sites and all-singing-and-dancing e-commerce systems. This means you get the best result based on your goals, integrating ever-changing best practices from across the internet.</span>
                    <span className='websites-para'>Let’s make your website ambitions a reality.</span>
                    <a href="/" className='yellow-button btn'>Get in touch</a>
                </div>
                <img src={Boy} alt="PhoneLaptop" />
                <div className="i-heading">
                    <span className='outline-txt'> MAKE IT</span>
                    <br />
                    <span className='bold-agency'> HAPPEN</span>
                </div>
            </div>
        </div>
    )
}
