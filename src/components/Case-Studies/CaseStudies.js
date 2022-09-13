import React from 'react'
import CSBoxes from './CSBoxes'
import CSHome from './CSHome'
import Reviews from '../LandingSection/Reviews'
import Articles from '../LandingSection/Articles'
export default function CaseStudies() {
  return (
    <div>
      <CSHome/>
      <CSBoxes/>
      <Articles bgColor={'#fff'}/>
      <Reviews/>
    </div>
  )
}
