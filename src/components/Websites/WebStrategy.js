import React from 'react'
import './WebStrategy.css'
import './DuplicatePortion.css'
import StrategyFirstImage from '../../images/web-strategy-image-1.jpg'
import StrategySecImage from '../../images/web-strategy-image-2.jpg'
function WebStrategy() {
    return (
        <div className='w-strategy w-sectional-css'>
            <div className="w-dup-portion">
                <div className='left text-content'>
                    <div className="w-heading">
                        WEBSITE STRATEGY
                    </div>
                    <span className='websites-para'>You have ambitious sales targets but complex customer journeys – and your stakeholder groups have conflicting priorities. This is the sort of web project we specialise in.</span>
                    <span className='websites-para'>We start by understanding your organisation, your goals, your target audiences and their expectations and behaviour – and how your website factors into all of it. Then, we look at the competitive landscape to establish context and benchmarks for how your site should function, so we can exceed those industry standards and smash your targets.</span>
                    <a href="/" className='yellow-button btn'>Get in touch</a>
                </div>
                <img src={StrategyFirstImage} alt="PhoneLaptop" />
            </div>
            <div className="w-dup-portion">
                <img src={StrategySecImage} alt="PhoneLaptop" />
                <div className="right text-content">
                    <div className="w-heading">
                        UX DESIGN
                    </div>
                    <span className='websites-para'>It’s not just about being pretty – it’s about being purposeful, human-centric and on brand. That’s the motto behind our approach. Our in-house UX designers agonise about all the details that make a web design compelling and effective, from user journeys to accessibility.</span>
                    <span className='websites-para'>It’s a collaborative process where we sketch out interface layouts for key templates like the home page, subpages, contact/call to action page and blog page. Then, we create high-fidelity comps that show what the final designs will look like on a desktop, tablet and smartphone.</span>
                    <span className='websites-para'>The result: a design that looks great, your target audiences like using on a range of devices – and helps achieve the conversions you’re aiming for.</span>
                    <a href="/" className='yellow-button btn'>Get in touch</a>
                </div>
            </div>
        </div>
    )
}

export default WebStrategy
