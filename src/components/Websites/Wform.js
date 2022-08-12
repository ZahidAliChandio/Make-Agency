import React from 'react'
import './Wform.css'
export default function Wform() {
    return (
        <div className='w-form-section web-intro-section'>
            <div className="i-left text-content">
                <div className="i-heading">
                    <span className='outline-txt'> READY?</span>
                    <span className='bold-agency'> LET'S GO</span>
                </div>
                <div className="para-container">
                    <span className='websites-para'>We specialise in driving revenue using paid and organic social marketing tactics. If you are a brand looking to scale, get in touch to discuss your goals. </span>
                </div>
            </div>
            <div className="w-form-container">
                <form action='/' className="w-form">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" name='first-name' />
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" name='last-name' />
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' />
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name='phone' />
                    <span>Make uses the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.</span>
                    <button type="submit" className='btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}
