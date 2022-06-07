import React, { useState, useRef } from 'react';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';
import nycSnowBg from './Static/img/nyc-snow.jpg';
import { Parallax } from 'react-parallax';
import { Routes, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

window.jQuery = $;

const App = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef(); 
  const skillsRef = useRef();

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleAboutClick = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(!isNavExpanded)
  }

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(!isNavExpanded)
  }

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(!isNavExpanded)
  }

  const imageZoom = () => {
    
  }
    
  return (
    <div className='main-container' ref={homeRef}>
      <Navbar 
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
        navBgColor={navBgColor}
        setNavBgColor={setNavBgColor}
        handleHomeClick={handleHomeClick}
        handleAboutClick={handleAboutClick}
        handleProjectsClick={handleProjectsClick}
        handleSkillsClick={handleSkillsClick}
      />
      <Parallax
        blur={0}
        bgImage={nycSnowBg}
        bgImageAlt='nyc-snow'
        strength={300}
      >
        <div className='intro-box'>
          <Intro />
        </div>
      </Parallax>
      {/* Intro end */}

      {/* main body begin */}
      <div className='main-body-box'>

        <div className='about-box' ref={aboutMeRef}>
          <AboutMe /> 
        </div>
        {/* AboutMe end */}

        <div className='projects-box' ref={projectsRef}>
          <MuiThemeProvider>
            <Projects 
              handleImageZoom={imageZoom}
            />
          </MuiThemeProvider>
        </div>
        {/* Projects end */}

        <div className='skills-box' ref={skillsRef}>
          <Skills />
        </div>
        {/* Skills end */}

        <div className='footer-box'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
