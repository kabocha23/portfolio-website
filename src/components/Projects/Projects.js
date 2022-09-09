import React, { useState, createRef } from 'react';
import useIntersection from '../../hooks/useIntersection'
import { Parallax } from 'react-parallax';
import koSamuiBg from '../../Static/img/kosamui2.jpg';
import FeaturedProject from './FeaturedProject';
// import URLShortener from './URLShortener';
// import IndecisiveEaters from './IndecisiveEaters';
// import EcommerceProductPage from './EcommerceProductPage';
// import InsureLandingPage from './InsureLandingPage';
// import RoomHomepage from './RoomHomepage';
// import SunnysideAgencyMock from './SunnysideAgencyMock';
// import NotesAppCard from './NotesAppCard';
// import FlashAppCard from './FlashAppCard';
// import WeatherAppCard from './WeatherAppCard';
import './Projects.css';



const Projects = ({ projectsData, featuredProjectRefs }) => {

    featuredProjectRefs.current = projectsData.map((proj) => 
        featuredProjectRefs.current[proj.id] 
        ?? createRef()
    );


    const inViewport0 = useIntersection(featuredProjectRefs.current[0], '-250px');
    const inViewport1 = useIntersection(featuredProjectRefs.current[1], '-250px');
    const inViewport2 = useIntersection(featuredProjectRefs.current[2], '-250px');
    const inViewport3 = useIntersection(featuredProjectRefs.current[3], '-250px');
    const inViewport4 = useIntersection(featuredProjectRefs.current[4], '-250px');
    const inViewport5 = useIntersection(featuredProjectRefs.current[5], '-250px');
    const inViewport6 = useIntersection(featuredProjectRefs.current[6], '-250px');
    const inViewport7 = useIntersection(featuredProjectRefs.current[7], '-250px');
    const inViewport8 = useIntersection(featuredProjectRefs.current[8], '-250px');
    if (inViewport0) {
        console.log('in viewport:', featuredProjectRefs.current[0].current);
    }
    if (inViewport1) {
        console.log('in viewport:', featuredProjectRefs.current[1].current);
    }
    if (inViewport2) {
        console.log('in viewport:', featuredProjectRefs.current[2].current);
    }
    if (inViewport3) {
        console.log('in viewport:', featuredProjectRefs.current[3].current);
    }
    if (inViewport4) {
        console.log('in viewport:', featuredProjectRefs.current[4].current);
    }
    if (inViewport5) {
        console.log('in viewport:', featuredProjectRefs.current[5].current);
    }
    if (inViewport6) {
        console.log('in viewport:', featuredProjectRefs.current[6].current);
    }
    if (inViewport7) {
        console.log('in viewport:', featuredProjectRefs.current[7].current);
    }
    if (inViewport8) {
        console.log('in viewport:', featuredProjectRefs.current[8].current);
    }


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

                {projectsData.map((projectsData) => (
                    <FeaturedProject 
                        key={`key-${projectsData.id}`}
                        ref={featuredProjectRefs.current[projectsData.id]}
                        pdId={projectsData.id}
                        image={projectsData.image}
                        title={projectsData.title}
                        headline={projectsData.headline}
                        caption={projectsData.caption}
                        description={projectsData.description}
                        sourceCode={projectsData.sourceCode}
                        liveDemo={projectsData.liveDemo}
                    />
                ))}

                {/* <div className='url-app indi-proj'>
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
                </div> */}

                <p id='more-to-come'>And more in the works...</p>

            </div>
        </div>
    )

}

export default Projects;