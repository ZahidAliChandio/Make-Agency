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
        <div className="s-boxes-container">
            <div className="s-box">
                <div className="img-container">
                    <a href="/"><img src={KlerityThumbnail} alt="Klerity" /></a>
                </div>
                <div className="img-container">
                    <a href="/"><img src={XapoThumbnail} alt="Xapo" /></a>
                </div>
                <div className="img-container">
                    <a href="/"><img src={NeatThumbnail} alt="Neat" /></a>
                </div>
                <div className="img-container">
                    <a href="/"><img src={SingleTrackThumbnail} alt="Neat" /></a>
                </div>
                <div className="img-container">
                    <a href="/"><img src={IBMThumbnail} alt="IBM" /></a>
                </div>
                <div className="img-container">
                    <a href="/"><img src={ClearpayThumbnail} alt="Clearpay" /></a>
                </div>
            </div>
        </div>
    )
}
