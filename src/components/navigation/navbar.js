import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import NameLogo from '../images/sisk_logo.png';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

  return (
    <>
    <nav className="Nav" scrollNav={scrollNav}>
        <div className="NavbarContainer">
            <LinkR className="NavLogo" to="/" onClick={toggleHome}>
                <img src={NameLogo} />
            </LinkR>
            <div className="MobileIcon" onClick={toggle}>
                <FaBars />
            </div>
            <ul className="NavMenu">
                <li className="NavItem">
                    <LinkS className="NavLink" to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Me</LinkS>
                </li>
                <li className="NavItem">
                    <LinkS className="NavLink" to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</LinkS>
                </li>
                <li className="NavItem">
                    <LinkS className="NavLink" to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</LinkS>
                </li>
                <li className="NavItem">
                    <LinkS className="NavLink" to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Me</LinkS>
                </li>
            </ul>
        </div>
    </nav>
    </>

  )
}

export default Navbar