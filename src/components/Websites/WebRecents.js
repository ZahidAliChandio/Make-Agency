import React, { useEffect } from 'react'
import './WebRecents.css'
import FormulaCar from '../../images/formula-car.jpg'
import Virgin from '../../images/recents-slider-virgin-thumbnail.png'
import KlerityImg from '../../images/recents-slider-image-2.png'
import KlerityLogo from '../../images/recents-slider-Klerity-logo.png'
import XapoVideo from '../../videos/xapo-video.mp4'
import XapoThumbnail from '../../images/recents-slider-xapo-thumbnail.png'
import Xapo from '../../images/recents-slider-xapo-logo.png'
import NeatVideo from '../../videos/neat-video.mp4'
import NeatThumbnail from '../../images/recents-slider-neat-thumbnail.png'
import SingleTackVideo from '../../videos/single-track.mp4'
import SingleTrackThumbnail from '../../images/recents-slider-single-track-thumbnail.png'
import SingleTrack from '../../images/recents-slider-single-track-logo.png'
import IBMThumbnail from '../../images/recents-slider-ibm-thumbnail.png'
import IbmLogo from '../../images/recents-slider-ibm-logo.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'
import { useRef } from 'react'

export default function WebRecents() {
  const VideoVar = useRef();
  const videoThumbnail = useRef();
  const changeOnMouseEnter = () => {
    videoThumbnail.current.style.display='none';
    VideoVar.current.play();
  }
  const changeOnMouseLeave = () => {
    videoThumbnail.current.style.display='block';
    VideoVar.current.pause();
  }
  return (
    <div id='recent-history'>
      <h2>WHAT WE'VE DONE RECENTLY</h2>
      <div className="swiper-container">
        <Swiper
          spaceBetween={8}
          slidesPerView={4}
          width={1150}
        >
          <a href="/"> <SwiperSlide >
            <div className='bg-image'>
              <img src={FormulaCar} alt="formula car" />
            </div>
            <div className="overlay">
              <img src={Virgin} alt="Virgin" />
            </div>
          </SwiperSlide></a>
          <a href="/"><SwiperSlide>
            <div className='bg-image'>
              <img src={KlerityImg} alt="Klerity" />
            </div>
            <div className='overlay'>
              <img src={KlerityLogo} alt="Klerity" />
            </div>
          </SwiperSlide></a>
          <a href="/" > <SwiperSlide
            onMouseEnter={changeOnMouseEnter}
            onMouseLeave={changeOnMouseLeave}
          >
            <div className='bg-image bg-video'>
              <video muted preload="auto" playsInline loop ref={VideoVar}>
                <source src={XapoVideo} type='video/mp4' />
              </video>
              <img src={XapoThumbnail} alt="Xapo" ref={videoThumbnail} className='video-thumb'/>
            </div>
            <div className="overlay">
              <img src={Xapo} alt="xapo" />
            </div>
          </SwiperSlide></a>
          <a href="/"><SwiperSlide
            onMouseEnter={changeOnMouseEnter}
            onMouseLeave={changeOnMouseLeave}
          >
            <div className='bg-image bg-video'>
              <video muted preload="auto" playsInline loop ref={VideoVar}>
                <source src={NeatVideo} type='video/mp4' />
              </video>
              <img src={NeatThumbnail} alt="Neat" ref={videoThumbnail} className='video-thumb'/>
            </div>
            <div className="overlay">
              <img src={Xapo} alt="xapo" />
            </div>
          </SwiperSlide></a>
          <a href="/"><SwiperSlide
            onMouseEnter={changeOnMouseEnter}
            onMouseLeave={changeOnMouseLeave}>
            <div className='bg-image bg-video'>
              <video muted preload="auto" playsInline loop ref={VideoVar}>
                <source src={SingleTackVideo} type='video/mp4' />
              </video>
              <img src={SingleTrackThumbnail} alt="SINGLETRACK" ref={videoThumbnail}/>
            </div>
            <div className="overlay">
              <img src={SingleTrack} alt="SINGLETRACK" />
            </div>
          </SwiperSlide></a>
          <a href="/"><SwiperSlide>
            <div className='bg-image'>
              <img src={IBMThumbnail} alt="Klerity"/>
            </div>
            <div className='overlay'>
              <img src={IbmLogo} alt="Klerity" />
            </div>
          </SwiperSlide></a>
        </Swiper>
      </div>
    </div>
  )
}
