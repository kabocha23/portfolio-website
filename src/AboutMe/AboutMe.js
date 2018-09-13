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
                    <h1 className='about-title'>Who am I...</h1>
                    <p>Hi there and thanks for checking out my portfolio! I'm a self-taught web developer currently focused on building an learning with the MERN stack (among other technologies).</p>
                    <p>I've been pursuing self-taught skills since I was young: whether it was breaking my toys apart to see how they work, building calluses on my fingertips so I could hold chords on the guitar, or submerging myself in documentation and stack overflow to integrate a small (but <span className='extreme'>extremely</span> important) feature on a project, I've always loved to give myself new challenges to conquer. </p>
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
                        <a href='https://www.linkedin.com/in/jason-kobuchi-5aa45811/'>
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