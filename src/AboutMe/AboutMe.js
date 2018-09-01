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
                    <p>Hi there and thanks for checking out my portfolio! I'm a self-taught web developer currently focused on React and React-Native.</p>
                    <p>I've been pursuing self-taught skills since I was young, playing guitar, giving myself a unique golf swing, and now diving in to the endless possibilites of web and mobile app development. Learning new technologies and creating projects is something I love to do. </p>
                    <p>I'd love to collaborate on cool projects, and i'm open to mentor-ship and any opportunities to connect with everyone. Feel free to shoot me a message through email or LinkedIn!</p>
                    <p className='please-note'>*All Photos on this site are taken by me and not sourced from other sites.</p>
                </div>
                <div className='contact-links'>
                    <div className='email-link single-link'>
                        <a href='mailto:jekobuchi@gmail.com'>
                            <img 
                                src={ require('../Static/img/email-icon2.png') } 
                                className='email-icon' 
                                alt='email-icon' 
                            />
                        </a>
                    </div>
                    <div className='linkedin-link single-link'>
                        <a href='https://www.linkedin.com/in/jason-kobuchi-5aa45811/'>
                            <img 
                                src={ require('../Static/img/linkedin-icon-circle2.png') } 
                                className='linkedin-icon' 
                                alt='linkedin-icon' 
                            />
                        </a>
                    </div>
                    <div className='github-link single-link'>
                        <a href='https://github.com/kabocha23'>
                            <img 
                                src={ require('../Static/img/github-icon.png') } 
                                className='github-icon' 
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