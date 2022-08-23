import React from 'react'
import XapoImage from '../../images/xapo-thumbnail.png'
import ClearpayGif from '../../images/clearpay-marketing.gif'
import LloydsPharmacyTrans from '../../images/lloyds-pharmacy.jpg'
import RacingCars from '../../images/racing-cars.gif'
import TransitionalMan from '../../images/transitional-man.gif'
import BurgerUnwrap from '../../images/burger-unwrap.gif'
import ImgBox from './ImgBox'
import TxtBox from './TxtBox'
import './Boxes.css'
function Boxes() {
    return (
        <div id="transition-section-container">
            <div id="l-transitional-section">
                <div className='breaking-div'>
                    <ImgBox content={XapoImage} overlaperHeading={'Xapo Bank'} overlaperContent={''} overlaperAnchor={'Explore Case Study'} />
                    <TxtBox text={'Make named a Clutch 100 Fastest-Growing Company for 2022'} btnText='Find out more' />
                    <ImgBox content={TransitionalMan} overlaperHeading={'EMI Records'} overlaperContent={'EMI engaged with Make to create a series of social content for Rocket Man and more recenty HRVY.'} overlaperAnchor={'Explore Case Study'} />
                </div>
                <div className='breaking-div'>
                    <ImgBox content={ClearpayGif} overlaperHeading={'Clearpay'} overlaperContent={'Clearpay is one of the most popular Fintech BNPL platforms in the UK.'} overlaperAnchor={'Explore Case Study'} />
                    <ImgBox content={LloydsPharmacyTrans} overlaperHeading={'Lloyds Pharmacy'} overlaperContent={'Lloyds Pharmacy provides an onlince doctor service.'} overlaperAnchor={'Explore Case Study'} />
                    <TxtBox text={'6 Social Media Marketing Trends & Predictions for 2022'} btnText='Read more' />
                </div>
                <div className='breaking-div'>
                    <TxtBox text={'Make featured in The Times: Bringing creativity to digital marketing'} btnText='Read more' />
                    <ImgBox content={RacingCars} overlaperHeading={'Envision Virgin Racing'} overlaperContent={'Envision Virgin Racing are on the rise both domestically and internationally.'} overlaperAnchor={'Explore Case Study'} />
                    <ImgBox content={BurgerUnwrap} overlaperHeading={'Mollies Diner'} overlaperContent={'Designed by Soho House, the roadside motel oozes 1950s retro cool with its unique technology centered guest experience.'} overlaperAnchor={'Explore Case Study'} />
                </div>
            </div>
            <div className="separator-div">
            </div>
        </div>
    )
}
export default Boxes
