import React from 'react'
import './Project.css'
import ArrowedImage from '../General/ArrowedImage'
import ProjectBg from '../../images/case-studies-arrow-bg.jpg'
import Website from '../../images/project-website.svg'
import Social from '../../images/project-social.svg'
import ContentCreation from '../../images/project-content-creation.svg'
import Search from '../../images/project-search.svg'
import { useState } from 'react'

export default function Project() {
  const [images, setImages] = useState({
    imagesObj: [{
      photo: Website,
      text: "Websites"
    },
    {
      photo: Social,
      text: "Social Media"
    },
    {
      photo: ContentCreation,
      text: "Content Creation"
    },
    {
      photo: Search,
      text: "Search (PPC/SEO)"
    }]
  });
  const [activated, setActivated] = useState([]);
  const toggleActive = (index) => {
    let activatedImages = [...activated]
    if (!activated.includes(images.imagesObj[index])) {
      activatedImages.push(images.imagesObj[index], index);
    }
    else {
      activatedImages.splice(index, 1);
    }
    setActivated(prev => prev = activatedImages);
  }
  const changeImageStyle = (index) => {
    if (activated.includes(images.imagesObj[index])) {
      return 'active';
    }
    else {
      return "inactive";
    }
  }
  return (
    <div id='project-container'>
      <div className="arrow-image-container">
        <ArrowedImage bgImage={ProjectBg} title={'Start your project'} subtitle={'To start your project simply complete the steps below.'} />
      </div>
      <div className="project-form-container">
        <span className="p-heading w-heading">Get started in 30 seconds!</span>
        <span className='p-sub-heading'>What can we help you with?*</span>
        <ul id='project-item-container'>
          {images.imagesObj.map((element, index) => {
            return <div key={index} className={changeImageStyle(index)} onClick={() => { toggleActive(index) }}>
              {/* <input type="checkbox" name={`form-check-box ${index}`} id="form-check-box" />
              <label htmlFor={`form-check-box ${index}`}> */}
              <li className='list-item'><div className={'form-image-container'}>
                <img src={element.photo} alt="" className={' '} /></div>
                <span className='list-item-title'>{element.text}</span></li>
              {/* </label> */}
            </div>
          })}
        </ul>
        <form action='/' className="p-form">
          <div className="field-container">
            <span> Name of project / URL if applicable?</span>
            <input type="text" name="project-name" id="project-name" />
          </div>
          <div className="field-container">
            <span> What is the primary business objective/goal for the project?*</span>
            <input type="text" name="primary-buisness" id="primary-buisness" />
          </div>
          <div className="field-container">
            <span>Budget* <span className='small-font'>Essentially digital projects vary massively in their complexity - Your budget will help us decide on the right solution for your project.</span>
            </span>
            <select name="select-budget" id="budget-selector">
              <option value="choose">Choose One Option</option>
              <option value="euro">£6,500 - £10,000</option>
              <option value="euro">£11,000 - £25,000</option>
              <option value="euro">£26,000 - £50,000</option>
              <option value="euro">£51,000- £100,000</option>
              <option value="euro">£100,000+</option>
            </select>
          </div>
          <div className="field-container">
            <span>What is the name of your business?*</span>
            <input type="text" name="drop-down" id="drop-down" />
          </div>
          <div className="field-container">
            <span>How many employees work for your business?*</span>
            <select name="selcect-number" id="number-selector">
              <option value="select-number">Choose one option</option>
              <option value="select-number">1-9</option>
              <option value="select-number">10-49</option>
              <option value="select-number">50-149</option>
              <option value="select-number">150-299</option>
              <option value="select-number">300+</option>
              <option value="select-number">Your name*</option>
            </select>
          </div>
          <div className="field-container">
            <span>Your name*</span>
            <input type="text" name="drop-down" id="drop-down" />
          </div>
          <div className="field-container">
            <span>Your work email address*</span>
            <input type="text" name="drop-down" id="drop-down" />
          </div>
          <div className="field-container">
            <span>Your phone number*</span>
            <input type="text" name="drop-down" id="drop-down" />
          </div>
          <button type="submit" className='btn'>Finished? Click Here!</button>
        </form>
      </div>
    </div>
  )
}
