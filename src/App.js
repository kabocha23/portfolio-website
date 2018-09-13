import React, { Component } from 'react';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import { Footer } from './Footer/Footer'; 
import { Link, Element , Events, animateScroll as scroll, scroller } from 'react-scroll';
import { Parallax } from 'react-parallax';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

window.jQuery = $;

class App extends Component {


  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', () => {
      console.log("end", arguments);
    });
    
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if (this.scrollIcon !== null) {
      if($(document).scrollTop() > 400){
        $(this.scrollIcon).attr('class', 'navbar navbar-default navbar-fixed-top solid');
      }else{
        $(this.scrollIcon).attr('class', 'navbar navbar-default navbar-fixed-top');
      }
    }
  }
  

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  
  scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    });

    goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      })
    );
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    return (
      <div className="main-container">
        {/* navbar begin */}
        <div className='nav-container'>
          <nav 
            ref={(ref) => this.scrollIcon = ref}
            className="navbar navbar-default navbar-fixed-top"
          >
            <div className="container-fluid">
              <div className='navbar-home'>
                <Link 
                  activeClass="active" 
                  to="root" 
                  onClick={this.scrollToTop} 
                  className='navbar-brand'
                >
                  JK
                </Link>
              </div>
                <button 
                  type="button" 
                  className="navbar-toggle" 
                  data-toggle="collapse" 
                  data-target=".target-here"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              <div className="navbar-collapse collapse target-here" id="nb-collapse">
                <ul className="nav navbar-nav">
                  <li> 
                    <Link 
                      activeClass="active" 
                      className="to-about" 
                      to="about" 
                      spy={true} 
                      smooth={true} 
                      duration={650} 
                      offset={-63} 
                    >
                      About
                    </Link> 
                  </li>
                  <li> 
                    <Link 
                      activeClass="active" 
                      className="to-projects" 
                      to="projects" 
                      spy={true} 
                      smooth={true} 
                      duration={650} 
                      offset={-63} 
                    >
                      Projects
                    </Link> 
                  </li>
                  <li> 
                    <Link 
                      activeClass="active" 
                      className="to-skills" 
                      to="skills" 
                      spy={true} 
                      smooth={true} 
                      duration={650} 
                      offset={-63} 
                    >
                      Skills
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* navbar end */}

        <Parallax
            blur={0}
            bgImage={ require('./Static/img/nyc-snow.jpg') }
            bgImageAlt="nyc-snow"
            strength={300}
        >
          <div className='intro-box' ref='introBoxRef'>
            <Intro />
          </div>
        </Parallax>
        {/* Intro end */}

        {/* main body begin */}
        <div className='main-body-box'>

          <div className='about-box'>
            <Element name="scroll-about" className="about" >
              <AboutMe /> 
            </Element>
          </div>
          {/* AboutMe end */}

          <div className='projects-box'>
            <Element name="scroll-projects" className="projects" >
              <MuiThemeProvider>
                <Projects />
              </MuiThemeProvider>
            </Element>
          </div>
          {/* Projects end */}

          <div className='skills-box'>
            <Element name="scroll-skills" className="skills" >
              <Skills />
            </Element>
          </div>
          {/* Skills end */}

          <div className='footer-box'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
