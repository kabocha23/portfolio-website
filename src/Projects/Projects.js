import React from 'react';
import './Projects.css';
import { Parallax } from 'react-parallax';
import koSamuiBg from '../Static/img/kosamui2.jpg';
import URLShortener from './URLShortener';
import IndecisiveEaters from './IndecisiveEaters';
import EcommerceProductPage from './EcommerceProductPage';
import InsureLandingPage from './InsureLandingPage';
import RoomHomepage from './RoomHomepage';
import SunnysideAgencyMock from './SunnysideAgencyMock';
import NotesAppCard from './NotesAppCard';
import FlashAppCard from './FlashAppCard';
import WeatherAppCard from './WeatherAppCard';



const Projects = ({ }) => {

    return(
        <div className='projects-container'>
        <Parallax
            blur={0}
            bgImage={koSamuiBg}
            bgImageAlt="nyc-mill-one"
            strength={400}
        >
            <div className='projects-header-box'>
                <h1 className='projects-header'>Projects</h1>
            </div>
        </Parallax>
            <div className='projects-content-box'>
                <div className='url-app indi-proj'>
                    <URLShortener />
                </div>                
                <div className='eaters-app indi-proj'>
                    <IndecisiveEaters />
                </div>
                <div className='ecommerce-app indi-proj'>
                    <EcommerceProductPage />
                </div>
                <div className='insurance-app indi-proj'>
                    <InsureLandingPage />
                </div>
                <div className='room-app indi-proj'>
                    <RoomHomepage />
                </div>
                <div className='sunnyside-app indi-proj'>
                    <SunnysideAgencyMock />
                </div>
                <div className='notes-app indi-proj'>
                    <NotesAppCard />
                </div>
                <div className='flashcard-app indi-proj'>
                    <FlashAppCard />
                </div>
                <div className='weather-app indi-proj'>
                    <WeatherAppCard />
                </div>
                <p id='more-to-come'>And more in the works...</p>
            </div>
        </div>
    )

}

export default Projects;