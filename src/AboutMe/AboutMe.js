import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component{

    render(){
        return(
            <div className='about-content-box'>
                <div className='profile-photo-box'>
                    <img 
                        src={ require('../Static/img/profile-photo.jpg') } 
                        className='profile-photo' 
                        alt='profile' 
                    />
                </div>
                <div className='about-content'>
                    <h1 className='about-title'>About Me</h1>
                    <p>Hey there! I'm a self-taught data analyst and web developer.</p>
                    <p>I've always had a strong curiosity to discover how things work beyond the design. Whether it was breaking my toys apart to see the mechanics, building calluses on my fingertips so I could hold chords on the guitar, or submerging myself in documentation and stack overflow to integrate a small (but extremely important) feature on a project, I've always loved to give myself new challenges to conquer.</p>
                    <p>I now use that curiosity to draw insights from all of the fun and interesting data available to us today.</p>
                    <p className='please-note'>*All Photos on this site are taken by me and not sourced from other sites.</p>
                </div>
                <div className='contact-links'>
                    <div className='email-link single-link'>
                        <a href='mailto:jekobuchi@gmail.com'>
                            <img 
                                src={ require('../Static/img/email-icon2.png') } 
                                className='email-icon about-icon' 
                                alt='email-icon' 
                            />
                        </a>
                    </div>
                    <div className='linkedin-link single-link'>
                        <a href='https://www.linkedin.com/in/jason-kobuchi/'>
                            <img 
                                src={ require('../Static/img/linkedin-icon-circle2.png') } 
                                className='linkedin-icon about-icon' 
                                alt='linkedin-icon' 
                            />
                        </a>
                    </div>
                    <div className='github-link single-link'>
                        <a href='https://github.com/kabocha23'>
                            <img 
                                src={ require('../Static/img/github-icon.png') } 
                                className='github-icon about-icon' 
                                alt='github-icon' 
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;