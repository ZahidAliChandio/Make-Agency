import React from 'react'
import ArrowedImage from '../General/ArrowedImage'
import ContactHomgBg from '../../images/about-bg-image.jpg'
import List from './List'
import Team from './Team'
import ProjectHire from '../General/ProjectHire'
import Articles from '../LandingSection/Articles'
import Reviews from '../LandingSection/Reviews'
import './About.css'

export default function About() {
  return (
    <div id="about-section">
      <div className="arrow-image-container">
        {/* <ArrowedImage
                        bgImage={IntroBgImage}
                        title={'Commercially Creative'}
                        subtitle={'Make is a London-based digital agency. We guarantee results across three key business areas: web design & build, social media & digital marketing, and creative content.'}
                        Anchor={'Explore'} /> */}
        <ArrowedImage bgImage={ContactHomgBg} title={'A young diverse team of digital experts'} subtitle={'With offices in the heart of London’s creative community, we’ve got our finger on the pulse.'} />
      </div>
      <List />
      <Team />
      <ProjectHire />
      <Articles bgColor={'#fff'} />
      <Reviews />
    </div>
  )
}
