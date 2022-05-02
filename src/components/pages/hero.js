import React, { useState } from 'react'
import Video from '../videos/video.mp4';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';


const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }

  return (
    <div className="HeroContainer" id='home'>
        <div className="HeroBg">
            <video autoPlay loop muted src={Video} type='video/mp4' />
        </div>
        <div className="HeroContent">
            <h1 className="HeroH1">Amberlyn Sisk</h1>
            <p className="HeroP">
                Full Stack Developer
            </p>
            <div className="HeroBtnWrapper">
                <Link className="Button"
                to="contact" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    Let's Connect {hover ? <MdArrowForward style={{ marginLeft: "8px",
                    fontSize: "20px" }} /> : <MdKeyboardArrowRight style={{ marginLeft: "8px",
                    fontSize: "20px" }} />}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection