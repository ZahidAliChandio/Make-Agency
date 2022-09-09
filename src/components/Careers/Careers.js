import React from 'react'
import './Careers.css'
import ArrowedImage from '../General/ArrowedImage'
import CareerImage from '../../images/careers-bg-image.jpg'
import Environment from './Environment'
export default function Careers() {
  return (
    <div id='careers-container'>
      <ArrowedImage image={CareerImage} title={'Careers'} subtitle={'We’re always on the lookout for bright digital minds, creative superstars, coding gurus and razorsharp client partners to add their own brand of digital brilliance to our heady mix.'} />
      <div className="career-agenda">
        <span className="heading">
          We create high-impact digital solutions that get results. We work with brands & organisations across the world to develop digital products and creative marketing that supports business goals.
        </span>
      </div>
      <Environment />
    </div>
  )
}
