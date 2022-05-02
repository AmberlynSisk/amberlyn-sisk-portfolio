import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import NameLogo from '../images/sisk_logo.png';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className="SidebarContainer" isOpen={isOpen} onClick={toggle} style={ { top: isOpen ? '0' : '-100%' } }>
        <div className="Icon" onClick={toggle}>
            <FaTimes />
        </div>
        <div className="SidebarWrapper">
            <ul className="SidebarMenu">
                <Link className="SidebarLink" to="home" onClick={toggle}>
                    <img src={NameLogo} />
                </Link>
                <Link className="SidebarLink" to="about" onClick={toggle}>
                    About Me
                </Link>
                <Link className="SidebarLink" to="skills" onClick={toggle}>
                    Skills
                </Link>
                <Link className="SidebarLink" to="projects" onClick={toggle}>
                    Projects
                </Link>
                <Link className="SidebarLink" to="contact" onClick={toggle}>
                    Contact Me
                </Link>
            </ul>
        </div>
    </aside>

  )
}

export default Sidebar