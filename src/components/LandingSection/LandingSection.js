import React from 'react'
import Intro from './Intro'
import Boxes from './Boxes'
import Articles from './Articles'
import Reviews from './Reviews'
import ArrowImage from './ArrowImage'
function LandingSection() {
  return (
    <div>
      <Intro/>
      <ArrowImage/>
      <Boxes/>
      <Articles bgColor={'#f4f4f4'}/>
      <Reviews/>
    </div>
  )
}

export default LandingSection
