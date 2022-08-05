import React from 'react'
import Intro from './Intro'
import Boxes from './Boxes'
import Articles from './Articles'
import Reviews from './Reviews'
import Footer from './Footer'
function LandingSection() {
  return (
    <div>
      <Intro/>
      <Boxes/>
      <Articles/>
      <Reviews/>
      <Footer>
        <Footer/>
      </Footer>
    </div>
  )
}

export default LandingSection
