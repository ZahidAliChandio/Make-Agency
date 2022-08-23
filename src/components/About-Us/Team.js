import React from 'react'
import { useRef } from 'react'
import TeamMember1 from '../../images/team-member-1.jpg'
import TeamMember2 from '../../images/team-member-2.jpg'
import TeamMember3 from '../../images/team-member-3.jpg'
import TeamMember4 from '../../images/team-member-4.jpg'
import TeamMember5 from '../../images/team-member-5.jpg'
import TeamMember6 from '../../images/team-member-6.jpg'
import TeamMember7 from '../../images/team-member-7.jpg'
import TeamMember8 from '../../images/team-member-8.jpg'
import TeamVideoThumbnail from '../../images/team-video-thumbnail.jpg'
import TeamVideo from '../../videos/team-video.mp4'
import TeamMedia1 from '../../images/team-media-1.jpg'
import TeamMedia2 from '../../images/team-media-2.jpg'
import TeamMedia3 from '../../images/team-media-3.jpg'
import TeamMedia4 from '../../images/team-media-4.jpg'
import VideoState from '../../images/video-state.svg'

import './Team.css'
export default function Team() {
    const teamVideo=useRef();
    const videoBtn=useRef();
    const videoThumbnail=useRef();
    const playTeamVideo=()=>{
        videoBtn.current.style.display='none';
        videoThumbnail.current.style.zIndex='-5';
        teamVideo.current.play();
        teamVideo.current.style.zIndex='100';
    }
    return (
        <div id='team-container'>
            <h3 className="t-title a-heading">
                Meet the team
            </h3>
            <div className="team-members">
                <a href="/"><div className="t-img-container">
                    <img src={TeamMember1} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
                <a href=""><div className="t-img-container">
                    <img src={TeamMember2} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
                <a href=""><div className="t-img-container">
                    <img src={TeamMember3} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
                <a href=""><div className="t-img-container">
                    <img src={TeamMember4} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
                <a href=""><div className="t-img-container">
                    <img src={TeamMember5} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
                <a href=""><div className="t-img-container">
                    <img src={TeamMember6} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
                <a href=""><div className="t-img-container">
                    <img src={TeamMember7} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
                <a href=""><div className="t-img-container">
                    <img src={TeamMember8} alt="Team Member" />
                    <div className="yellow-border"></div>
                </div></a>
            </div>
            <div id="team-video-container">
                <video loop preload="auto" muted playsInline ref={teamVideo}>
                    <source src={TeamVideo} type='video/mp4' alt='Team video' />
                </video>
                <div id="team-video-thumbnail">
                    <img src={TeamVideoThumbnail} alt="Team video Thumbnail" ref={videoThumbnail}/>
                </div>
                <button className='change-video-state' onClick={playTeamVideo}  ref={videoBtn}>
                    <img src={VideoState} alt="Play/Pause" />
                </button>
            </div>
            <div id="team-media">
                <img src={TeamMedia1} alt="Team Media" />
                <img src={TeamMedia2} alt="Team Media" />
                <img src={TeamMedia3} alt="Team Media" />
                <img src={TeamMedia4} alt="Team Media" />
            </div>
        </div>
    )
}
