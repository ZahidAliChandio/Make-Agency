import React from 'react'
import './List.css'
export default function List() {
    return (
        <div className='list-section'>
            <div className="list-left">
                <div className="left-item">
                    <span className='l-yellow-text text-yellow'>Websites launched</span>
                    <span className='l-number-heading'>353</span>
                </div>
                <div className="left-item">
                    <span className='l-yellow-text text-yellow'>Campaigns worked on</span>
                        <span className='l-number-heading'>1590</span>
                </div>
                <div className="left-item">
                    <span className='l-yellow-text text-yellow'>Current Google rating</span>
                    <span className='l-number-heading'>100%</span>
                </div>
            </div>
            <div className="list-right">
                <h3 className="title a-heading">A safe pair of hands</h3>
                <span className='subtitle'>Make is a young, tight-knit and fast growing team of professionals, specialising in the latest website development and digital marketing trends.</span>
                <span className='l-right-para'>Our team is experienced in creating high-impact digital solutions that get results. We work with brands & organisations across the world to develop digital products and creative marketing that supports their business goals.</span>
                <span className='l-right-para'>Do you need a stunning, high performing website or digital campaign? That ranks highly in search results? Moves with the times and, more importantly, engage people, helps you sell more and generates new business?</span>
                <span className='l-right-para'>We can make it happen.</span>
            </div>
        </div>
    )
}
