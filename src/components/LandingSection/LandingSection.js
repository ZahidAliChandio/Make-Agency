import React from 'react'
import Intro from './Intro'
import Boxes from './Boxes'
import Articles from './Articles'
import Reviews from './Reviews'
function LandingSection() {
  return (
    <div>
      <Intro/>
      <Boxes/>
      <Articles bgColor={'#f4f4f4'}/>
      <Reviews/>
    </div>
  )
}

export default LandingSection
