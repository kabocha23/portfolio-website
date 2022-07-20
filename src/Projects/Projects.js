import React from 'react';
import './Projects.css';
import { Parallax } from 'react-parallax';
import nycMillOneBg from '../Static/img/nyc-mill-one2.jpg';
import IndecisiveEaters from './IndecisiveEaters';
import EcommerceProductPage from './EcommerceProductPage';
import InsureLandingPage from './InsureLandingPage';
import SunnysideAgencyMock from './SunnysideAgencyMock';
import NotesAppCard from './NotesAppCard';
import FlashAppCard from './FlashAppCard';
import WeatherAppCard from './WeatherAppCard';
import DragonGoCraft from './DragonGoCraft';
import AndroidCalculator from './AndroidCalculator';
import AndroidCryptoTracker from './AndroidCryptoTracker';



const Projects = ({ handleImageZoom }) => {

    return(
        <div className='projects-container'>
        <Parallax
            blur={0}
            bgImage={nycMillOneBg}
            bgImageAlt="nyc-mill-one"
            strength={400}
        >
            <div className='projects-header-box'>
                <h1 className='projects-header'>Projects</h1>
            </div>
        </Parallax>
            <div className='projects-content-box'>
                <div className='eaters-app indi-proj'>
                    <IndecisiveEaters />
                </div>
                <div className='ecommerce-app indi-proj'>
                    <EcommerceProductPage />
                </div>
                <div className='insurance-app indi-proj'>
                    <InsureLandingPage />
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
                <div className='dragon-go-craft-app indi-proj'>
                    <DragonGoCraft />
                </div>
                <div className='crypto-app indi-proj'>
                    <AndroidCryptoTracker />
                </div>
                <div className='calculator-app indi-proj'>
                    <AndroidCalculator />
                </div>
            </div>
            <div className='more-to-come'>
                    <p>And more in the works...</p>
            </div>
        </div>
    )

}

export default Projects;