import React from 'react'
import Bank from './Bank'
import WebRecents from './WebRecents'
import SEO from './SEO'
import WebIntro from './WebIntro'
import './Website.css'
import WebStrategy from './WebStrategy'
import WhyMake from './WhyMake'
import Wform from './Wform'
import Keypoints from './Keypoints'
function Website() {
  return (
    <div id='websites-section'>
      <WebIntro />
      <WebStrategy/>
      <Bank/>
      <SEO/>
      <WebRecents/>
      <WhyMake/>
      <Keypoints/>
      <Wform/>
    </div>
  )
}

export default Website
