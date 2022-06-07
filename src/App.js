import React, { useState, useRef } from 'react';
import $ from 'jquery';
import bootstrap from 'bootstrap';
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

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef(); 
  const skillsRef = useRef();

  const toggleIsNav = () => {
    setIsNavExpanded(!isNavExpanded)
    console.log(isNavExpanded)
  }

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ top: -65, behavior: 'smooth' });
  }

  const handleAboutClick = () => {
    aboutMeRef.current.scrollIntoView({ top: -65, behavior: 'smooth' });
  }

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const imageZoom = () => {
    
  }
    
  return (
    <div className='main-container' ref={homeRef}>
      {/* navbar begin */}
      <div className='nav-container'>
        <div className='navbar-home'>
            <button onClick={handleHomeClick}>JK</button>
        </div>
        <div className='toggle-button'>
          <button
            type='button'
            title='col-nav-btn'
            onClick={toggleIsNav}
          >
            ☰
          </button>
        </div>
        <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
          <ul>
            <li><button onClick={handleAboutClick}>About</button></li>
            <li><button onClick={handleProjectsClick}>Projects</button></li>
            <li><button onClick={handleSkillsClick}>Skills</button></li>
          </ul>
        </div>
        <div className='nav-menu-fs'>
          <div className='nav-menu-fs-sub'>
            <button onClick={handleAboutClick}>About</button>
            <button onClick={handleProjectsClick}>Projects</button>
            <button onClick={handleSkillsClick}>Skills</button>
          </div>                
        </div>
      </div>
      {/* navbar end */}

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
