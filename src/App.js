import React, { useState, useRef } from "react";
import projectsData from "./data/projectsData";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import nycSnowBg from "./Static/img/nyc-snow.jpg";
import { Parallax } from "react-parallax";
import emailjs from "@emailjs/browser";
import "./App.css";

const App = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef();
  const featuredProjectRefs = useRef([]);
  const contactRef = useRef();
  const formRef = useRef();

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    setIsNavExpanded(false);
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    setIsNavExpanded(false);
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setIsNavExpanded(false);
  };

  const handleEmailStateChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    if (e) e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent! Thanks for reaching out");
          setMailerState({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert(
            "There was an error sending the message, please try again later"
          );
        }
      );
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <div className="main-container" ref={homeRef}>
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
        bgImageAlt="nyc-snow"
        strength={300}
      >
        <div className="intro-box">
          <Intro />
        </div>
      </Parallax>
      <div className="main-body-box">
        <div className="about-box" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div className="projects-box" ref={projectsRef}>
          <Projects
            projectsData={projectsData}
            featuredProjectRefs={featuredProjectRefs}
          />
        </div>
        <div className="contact-box" ref={contactRef}>
          <Contact
            mailerState={mailerState}
            setMailerState={setMailerState}
            handleEmailStateChange={handleEmailStateChange}
            sendEmail={sendEmail}
            isValidEmail={isValidEmail}
            formRef={formRef}
          />
        </div>
        <div className="footer-box">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
