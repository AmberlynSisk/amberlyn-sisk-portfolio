import React from 'react';
import { RiDownloadLine } from 'react-icons/ri';
import AboutPic from '../images/about.jpg';
// import Roll from 'react-reveal/Roll';
import Resume from '../downloads/Amberlyn_Sisk_Resume.PDF';

const About = () => {
  return (
    <div className="AboutContainer" id="about">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="AboutHeader">
            <a className="AboutBtn" href={Resume} download> <RiDownloadLine /> Resume </a>
        </div>
        <div className="AboutHero">
          <div className="RightSide">
            <img src={AboutPic} alt="about-pic" />
          </div>
          <div className="LeftSide">
            {/* <Roll left duration={2000}> */}
            <p>
                I am a dedicated and hardworking US Army Veteran that recently found my passion in Software Development. I pride myself on my extreme attention to detail and love to experiement with code. I graduated from Bottega University with a certificate in Full Stack Development.
            </p>
            {/* </Roll> */}
          </div>
        </div>
    </div>
  )
}

export default About