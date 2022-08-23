import React from 'react'
import './Boxes.css'
function TxtBox(props) {
  return (
    <div className='l-transtional-txt-box transitional-box'>
      <p>{props.text}</p>
      <a href="/" className='transitional-btn button'>{props.btnText}</a>
    </div>
  )
}

export default TxtBox
