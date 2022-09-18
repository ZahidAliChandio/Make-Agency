import React from 'react'
import './CSBoxes.css'
import KlerityThumbnail from '../../images/case-studies-klarity-thumbnail.png'
import XapoThumbnail from '../../images/xapo-thumbnail.png'
import NeatThumbnail from '../../images/neat-thumbnail.png'
import SingleTrackThumbnail from '../../images/single-track-thumbnail.png'
import IBMThumbnail from '../../images/ibm-thumbnail.png'
import ClearpayThumbnail from '../../images/clearpay-thumbnail.png'
export default function CSBoxes() {
    return (
        <div className="boxes-container">
            <a href="/" className="img-container" >
                <img src={KlerityThumbnail} alt="Klerity" />
            </a >
            <a href="/" className="img-container">
                <img src={XapoThumbnail} alt="Xapo" />
            </a>
            <a href="/" className="img-container">
                <img src={NeatThumbnail} alt="Neat" />
            </a>
            <a href="/" className="img-container">
                <img src={SingleTrackThumbnail} alt="Neat" />
            </a>
            <a href="/" className="img-container">
                <img src={IBMThumbnail} alt="IBM" />
            </a>
            <a href="/" className="img-container">
                <img src={ClearpayThumbnail} alt="Clearpay" />
            </a>
        </div>
    )
}
