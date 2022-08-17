import React, { useState, useRef } from 'react';
import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import nycSnowBg from './Static/img/nyc-snow.jpg';
import { Parallax } from 'react-parallax';
// import { Routes, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';



const App = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);


  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef(); 
  const skillsRef = useRef();
  const contactRef = useRef();

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleAboutClick = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }

  const handleContactFormSubmit = e => {
    console.log(name, email, message)
    if(e) e.preventDefault();
    if (name && email && message) {
       // TODO - send mail

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields');
    }
  }

  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
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
        handleContactClick={handleContactClick}
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
            />
          </MuiThemeProvider>
        </div>
        {/* Projects end */}

        <div className='skills-box' ref={skillsRef}>
          <Skills />
        </div>
        {/* Skills end */}

        <div className='contact-box' ref={contactRef}>
          <Contact 
            name={name} 
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            emailSent={emailSent}
            setEmailSent={setEmailSent}
            handleContactFormSubmit={handleContactFormSubmit}
          />
        </div>
        {/* Contact end */}

        <div className='footer-box'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
