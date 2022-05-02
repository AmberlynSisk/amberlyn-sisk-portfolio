import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Easy from '../images/2Easy-ss.png';
import Diner from '../images/BottegaDiner-ss.png';

const Projects = () => {
    const [showProjTwo, setShowProjTwo] = useState(false);

    const HandleClick = () => {
        setShowProjTwo(!showProjTwo)
    }

  return (
    <div className="ProjectsContainer" id="projects">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="ProjectsHeader">
            <a className="ProjectsBtn" href="https://github.com/AmberlynSisk" target="_blank"> GitHub </a>
        </div>
        <div className="ProjectsHero">
            <FaArrowLeft className="ArrowLeft" onClick={HandleClick} />
            <div className="ProjectOne" style={{ display: showProjTwo ? "none" : "flex" }}>
                <img className="ProjectImg" src={Easy} alt="Easy" />
                <p className="ProjectDescription"> 
                    A frontend website built for a cleaning business, built using ReactJS and deployed to Netlify.
                </p>
                <a className="ProjectUrl" href="https://2easy-ta50.com/" target="_blank">Visit Website</a>
                <a className="ProjectCode" href="https://github.com/AmberlynSisk/2easy-frontend" target="_blank">Code</a>
            </div>
            <div className="ProjectTwo" style={{ display: showProjTwo ? "flex" : "none" }}>
                <img className="ProjectImg" src={Diner} alt="Diner" />
                <p className="ProjectDescription"> 
                    A full stack project built to showcase my skills, built using ReactJS for frontend and Python/Flask for backend. Deployed to Heroku.
                </p>
                <a className="ProjectUrl" href="https://bottega-diner-frontend.herokuapp.com/" target="_blank">Visit Website </a>
                <a className="ProjectCode" href="https://github.com/AmberlynSisk/bottega-diner-frontend" target="_blank">Frontend Code</a>
                <a className="ProjectCode" href="https://github.com/AmberlynSisk/bottega-diner-backend" target="_blank">Backend Code</a>
            </div>
            <FaArrowRight className="ArrowRight" onClick={HandleClick} />
        </div>
    </div>
  )
}

export default Projects