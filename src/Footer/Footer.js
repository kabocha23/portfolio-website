import React from 'react';
import './Footer.css';


export const Footer = () => (
    <div className='footer-container'>
        <div className='footer-subtitle'>
            <p>2022 - Jason Kobuchi</p>
        </div>
        <div className='foot-contact-links'>

            <div className='email-link foot-single-link'>
                <a href='mailto:jekobuchi@gmail.com'>
                    <img 
                        src={ require('../Static/img/email-icon2.png') } 
                        className='email-icon foot-icon' 
                        alt='email-icon' 
                    />
                </a>
            </div>

            <div className='linkedin-link foot-single-link'>
                <a href='https://www.linkedin.com/in/jason-kobuchi/'>
                    <img 
                        src={ require('../Static/img/linkedin-icon-circle2.png') } 
                        className='linkedin-icon foot-icon' 
                        alt='linkedin-icon' 
                    />
                </a>
            </div>
            
            <div className='github-link foot-single-link'>
                <a href='https://github.com/kabocha23'>
                    <img 
                        src={ require('../Static/img/github-icon2.png') } 
                        className='github-icon2 foot-icon' 
                        alt='github-icon2' 
                    />
                </a>
            </div>
        </div>
    </div>

)
