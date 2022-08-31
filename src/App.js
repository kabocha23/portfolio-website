import React, { useState, useRef } from 'react';
import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import nycSnowBg from './Static/img/nyc-snow.jpg';
import { Parallax } from 'react-parallax';
import emailjs from '@emailjs/browser';
import './App.css';


const App = () => {


  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [projectDetails, setProjectDetails] = useState([
    {
        id: 1,
        title: 'Shortly, URL Shortening Application',
        headline: 'Shortly',
        caption: 'React, Shrtcode API',
        image: 'shortly-preview',
        description: 'A responsive web/mobile application that shortens the user\'s URL by tapping into the Shrtcode API. \nFeatures include: \n- input allowing user to make API call and shorten any url \n- dynamically generated search history list with copy to clipboard button \n- navbar transitioning to hidden menu (sliding in from top) \n- responsive design for web and mobile',
        sourceCode: 'https://github.com/kabocha23/URL-Shortener',
        liveDemo: 'https://kabocha23.github.io/URL-Shortener'
    },
    {
        id: 2,
        title: 'Indecisive Eaters',
        headline: 'Indecisive Eaters',
        caption: 'React, Node, Express, Yelp-Fusion API, Axios, React DnD, reactjs-popup',
        image: 'indecisive-eaters1',
        description: 'A web application made for those who can\'t decide where to eat. Search for restaurants with Yelp-Fusion API, and drag the desired restaurants to the list on the right. When you\'re ready to go, the app will randomly chose one for you!',
        sourceCode: 'https://github.com/kabocha23/Indecisive',
        liveDemo: 'https://whispering-forest-79782.herokuapp.com'
    },
]);

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef(); 
  const contactRef = useRef();
  const formRef = useRef();

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

  // const handleSubmitMessage = async (e) => {
  //   if(e) e.preventDefault();

  //   console.log({ mailerState });
  //   const response = await fetch('https://jk-portfolio-app.herokuapp.com/send', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ mailerState }),
  //   })
  //   .then((res) => res.json())
  //   .then(async (res) => {
  //     const resData = await res;
  //     console.log(resData);
  //     if (resData.status === 'success') {
  //       alert('Message Sent');
  //     } else if (resData.status === 'fail') {
  //       alert('Message failed to send');
  //     }
  //   })
  //   .then(() => {
  //     setMailerState({
  //       name: '',
  //       email: '',
  //       message: '',
  //     })
  //   })
  // }

  
  const sendEmail = (e) => {
    if(e) e.preventDefault();
    
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert('Message sent! Thanks for reaching out');
          setMailerState({
            name: '',
            email: '',
            message: '',
          })
      }, (error) => {
          console.log(error.text);
          alert('There was an error sending the message, please try again later');
      });

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
            <Projects projectDetails={projectDetails}/>
        </div>
        {/* Projects end */}

        <div className='contact-box' ref={contactRef}>
          <Contact 
            mailerState={mailerState}
            setMailerState={setMailerState} 
            handleEmailStateChange={handleEmailStateChange}
            sendEmail={sendEmail}
            formRef={formRef}
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
