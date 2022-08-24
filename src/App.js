import React, { useState, useRef } from 'react';
import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import nycSnowBg from './Static/img/nyc-snow.jpg';
import { Parallax } from 'react-parallax';
// import { Routes, Route, Link } from "react-router-dom";
import './App.css';


const App = () => {


  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef(); 
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

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }

  const handleEmailStateChange = (e) => {
    setMailerState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmitMessage = async (e) => {
    if(e) e.preventDefault();

    console.log({ mailerState });
    const response = await fetch('https://jk-portfolio-app.herokuapp.com/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ mailerState }),
    })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === 'success') {
        alert('Message Sent');
      } else if (resData.status === 'fail') {
        alert('Message failed to send');
      }
    })
    .then(() => {
      setMailerState({
        name: '',
        email: '',
        message: '',
      })
    })
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
            <Projects />
        </div>
        {/* Projects end */}

        <div className='contact-box' ref={contactRef}>
          <Contact 
            mailerState={mailerState}
            setMailerState={setMailerState} 
            handleEmailStateChange={handleEmailStateChange}
            handleSubmitMessage={handleSubmitMessage}
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
