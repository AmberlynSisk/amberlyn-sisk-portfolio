import React, { useState } from 'react';
import Navbar from '../navigation/navbar';
import Sidebar from '../navigation/sidebar';
import About from './about';
import Contact from './contact';
import HeroSection from './hero';
import Projects from './projects';
import Skills from './skills';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home