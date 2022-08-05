import React from 'react'
import './Intro.css'
import Video from '../../Make-Agency-Marketing-Agency.mp4'
import Xapo from '../../transitionl-logos/xapo.png'
import Neat from '../../transitionl-logos/neat.png'
import NordCloundIBM from '../../transitionl-logos/nordcloud-ibm.png'
import Clearpay from '../../transitionl-logos/clearpay.png'
import Harri from '../../transitionl-logos/harri.png'
import IBM from '../../transitionl-logos/IBM.png'
import Hardsoft from '../../transitionl-logos/Hardsoft.png'
import SohoHouse from '../../transitionl-logos/SohoHouse.png'
import EMI1 from '../../transitionl-logos/EMI-1.png'
import Laundrapp from '../../transitionl-logos/Laundrapp.png'
import ClydeCoLogo from '../../transitionl-logos/clyde-co-logo.png'
import CocoLogo from '../../transitionl-logos/coco-logo.png'
import VirginRacing from '../../transitionl-logos/VirginRacing.png'
import BonnierBooks from '../../transitionl-logos/BonnierBooks.png'
import RacingPost from '../../transitionl-logos/RacingPost.png'
import DEBEERS from '../../transitionl-logos/DEBEERS.png'
import LloydsPharmacy from '../../transitionl-logos/LloydsPharmacy.png'
import FSBLogo from '../../transitionl-logos/FSBLogo.png'
import IntroBgImage from '../../images/landing-intro-background-image.jpg'
import IntroOverlayImage from '../../images/introduction-overlay-black.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SwiperCore,{Autoplay} from 'swiper'
import Boxes from './Boxes'
export default function LandingSection() {
  SwiperCore.use([Autoplay]);
  const swiperRunner = {
    spaceBetween: 5,
    slidesPerView: 6,
    // grabCursor: true,
    // className: 'logos-container-slider',
    loop: true,
    autoplay: {
      delay: 900
    },
  }
  return (
    <div id='landing-section'>
      <div className="video-container">
        <video loop autoPlay={true} preload="auto" muted playsInline>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="landing-content">
          <h1 className='landing-title'>A DIGITAL AGENCY WITH A PASSION FOR MARKETING</h1>
          <h2 className='landing-subtitle'>Creatively led. Results driven. Experts at what we do. <span className='text-yellow'>We make it happen.</span></h2>
          <a href="/" className='btn white-button' id='land-white-btn'>Our Work</a>
          <a href="/" className='btn yellow-button' id='land-yellow-btn'>Start Your Project</a>
        </div>
        <div className="logos-container">
          <div className="logos-wrapper">
            <Swiper
              {...swiperRunner}
            >
              <SwiperSlide>
                <img src={Xapo} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Neat} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={NordCloundIBM} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clearpay} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Harri} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={IBM} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Hardsoft} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={SohoHouse} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={EMI1} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Laundrapp} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ClydeCoLogo} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CocoLogo} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={VirginRacing} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={BonnierBooks} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={RacingPost} alt="Racing Post Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DEBEERS} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={LloydsPharmacy} alt="xapo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={FSBLogo} alt="xapo" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="l-intro">
        <img src={IntroBgImage} alt="introduction Background Image" className='intro-bg-image' />
        <img src={IntroOverlayImage} alt="introduction Background Overlay Image" className='overlay-image' />
        <div className="i-text-content">
          <h1>Commercially Createive</h1>
          <p>Make is a London-based digital agency. We guarantee results across three key business areas:
            web design & build, social media & digital marketing, and creative content.</p>
          <a href="/" className='button i-button'>Explore</a>
        </div>
      </div>
    </div>
  )
}