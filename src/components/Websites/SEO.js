import React from 'react'
//Css of Strategy is being used
import SEOImg from '../../images/w-seo-image.jpg'
import DeployementImg from '../../images/formula-car.jpg'
export default function SEO() {
    return (
        <div className='s-seo-section w-sectional-css'>
            <div className="w-dup-portion">
                <div className='left text-content'>
                    <div className="w-heading">
                        TECHNICAL SEO
                    </div>
                    <span className='websites-para'>We design and develop websites that rank for the right keywords so you get visibility in line with your business objectives. And we do it in a way that leverages your existing SEO heritage.</span>
                    <span className='websites-para'>This involves conducting thorough testing and maximising site speed. It involves optimising page titles, meta descriptions and images; creating SEO-friendly URLS and canonical tags; and more. We cover all the back-end SEO bases so your brand gets the online recognition it deserves.</span>
                    <a href="/" className='yellow-button btn'>Get in touch</a>
                </div>
                <img src={SEOImg} alt="PhoneLaptop" />
            </div>
            <div className="w-dup-portion">
                <img src={DeployementImg} alt="PhoneLaptop" />
                <div className="right text-content">
                    <div className="w-heading">
                    TESTING & DEPLOYMENT
                    </div>
                    <span className='websites-para'>Our in-house dev team are whizzes at HTML, CSS and JavaScript, taking an agile approach to ensure you see tangible progress throughout the project. You’ll have a test prototype in your hands as quickly as possible, so you can see how the build will look and function before we release it to the public.</span>
                    <span className='websites-para'>Importantly, Make websites are built to perform and built to last. They’re robust from security and uptime perspectives and designed for streamlined management, so your teams can easily make changes, additions and updates.</span>
                    <a href="/" className='yellow-button btn'>Get in touch</a>
                </div>
            </div>
        </div>
    )
}
