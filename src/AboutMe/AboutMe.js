import React from 'react';
import profilePhoto from '../Static/img/profile-photo.jpg';
import emailIcon from '../Static/img/email-icon2.png';
import linkedInIcon from '../Static/img/linkedin-icon-circle2.png';
import githubIcon from '../Static/img/github-icon.png';
import './AboutMe.css';

const AboutMe = () => {

    return(
        <div className='about-content-box'>
            <div className='profile-photo-box'>
                <img 
                    src={profilePhoto} 
                    className='profile-photo' 
                    alt='profile' 
                />
            </div>
            <div className='about-content'>
                <h1 className='about-title'>About Me</h1>
                <p>Hey there! I'm a self-taught web developer and Data Analyst</p>
                <p>I've always had a strong curiosity to discover how things work behind the scenes. Whether it was breaking my toys apart to see the mechanics, building calluses on my fingertips so I could hold chords on the guitar, or submerging myself in documentation and stack overflow to integrate a small (but extremely important) feature on a project, I've always loved to give myself new challenges to conquer.</p>
                <p>I now use that curiosity to draw insights from all of the fun and interesting data available to us today.</p>
                <p className='please-note'>*All Photos on this site are taken by me and not sourced from other sites.</p>
            </div>
            <div className='contact-links'>
                <div className='email-link single-link'>
                    <a href='mailto:jekobuchi@gmail.com'>
                        <img 
                            src={emailIcon} 
                            className='email-icon about-icon' 
                            alt='email-icon' 
                        />
                    </a>
                </div>
                <div className='linkedin-link single-link'>
                    <a href='https://www.linkedin.com/in/jason-kobuchi/'>
                        <img 
                            src={linkedInIcon} 
                            className='linkedin-icon about-icon' 
                            alt='linkedin-icon' 
                        />
                    </a>
                </div>
                <div className='github-link single-link'>
                    <a href='https://github.com/kabocha23'>
                        <img 
                            src={githubIcon} 
                            className='github-icon about-icon' 
                            alt='github-icon' 
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;