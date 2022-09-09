import React from 'react'
import './About.css'
import ArrowedImage from '../General/ArrowedImage'
import ContactHomgBg from '../../images/about-bg-image.jpg'
import List from './List'
import Team from './Team'
import ProjectHire from '../General/ProjectHire'
import Articles from '../LandingSection/Articles'
import Reviews from '../LandingSection/Reviews'

export default function About() {
  return (
    <div id="contact-section">
      <ArrowedImage image={ContactHomgBg} title={'A young diverse team of digital experts'} subtitle={'With offices in the heart of London’s creative community, we’ve got our finger on the pulse.'} />
      <List/>
      <Team/>
      <ProjectHire/>
      <Articles bgColor={'#fff'}/>
      <Reviews/>
    </div>
  )
}
