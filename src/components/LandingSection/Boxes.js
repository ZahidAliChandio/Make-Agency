import React from 'react'
import XapoImage from '../../images/xapo-thumbnail.png'
import ClearpayGif from '../../images/clearpay-marketing.gif'
import LloydsPharmacyTrans from '../../images/lloyds-pharmacy.jpg'
import RacingCars from '../../images/racing-cars.gif'
import TransitionalMan from '../../images/transitional-man.gif'
import BurgerUnwrap from '../../images/burger-unwrap.gif'
import Box from './Box'
import './Boxes.css'
function Boxes() {
    return (
        <div id="transition-section-container" className='padding-x'>
            <div id="transition-section-inner-container" className='wrapper'>
                <div className='column-3'>
                    <Box content={ClearpayGif} overlaperHeading={'Clearpay'} overlaperContent={'Clearpay is one of the most popular Fintech BNPL platforms in the UK.'} overlaperAnchor={'Explore Case Study'} />
                    <Box text={'Make named a Clutch 100 Fastest-Growing Company for 2022'} btnText='Find out more' />
                    <Box content={TransitionalMan} overlaperHeading={'EMI Records'} overlaperContent={'EMI engaged with Make to create a series of social content for Rocket Man and more recenty HRVY.'} overlaperAnchor={'Explore Case Study'} />
                </div>
                <div className='column-3'>
                    <Box content={XapoImage} overlaperHeading={'Xapo Bank'} overlaperContent={''} overlaperAnchor={'Explore Case Study'} />
                    <Box content={LloydsPharmacyTrans} overlaperHeading={'Lloyds Pharmacy'} overlaperContent={'Lloyds Pharmacy provides an onlince doctor service.'} overlaperAnchor={'Explore Case Study'} />
                    <Box text={'6 Social Media Marketing Trends & Predictions for 2022'} btnText='Read more' />
                </div>
                <div className='column-3'>
                    <Box text={'Make featured in The Times: Bringing creativity to digital marketing'} btnText='Read more' />
                    <Box content={RacingCars} overlaperHeading={'Envision Virgin Racing'} overlaperContent={'Envision Virgin Racing are on the rise both domestically and internationally.'} overlaperAnchor={'Explore Case Study'} />
                    <Box content={BurgerUnwrap} overlaperHeading={'Mollies Diner'} overlaperContent={'Designed by Soho House, the roadside motel oozes 1950s retro cool with its unique technology centered guest experience.'} overlaperAnchor={'Explore Case Study'} />
                </div>
            </div>
        </div>
    )
}
export default Boxes
