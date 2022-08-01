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
                <p>Hey there! Thanks for stopping by. I'm a self-taught Frontend developer and Data Analyst</p>
                <p>I've always had a strong curiosity to discover how things work. Whether it was breaking my toys apart as a child to see the mechanics, building calluses on my fingertips so I could hold chords on the guitar, or integrating new features on a project, I've always loved solving new challenges.</p>
                <p>I now use that curiosity to build web/mobile apps and draw insights from all of the fun and interesting data available to us today.</p>
                <p>Please take a look at some of my work below, and feel free to contact me through email, linkedin, or github through the links below. I hope to hear from your soon!</p>
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