import React from 'react';
import './FeaturedProject.css'


const FeaturedProject = ({ image, title, headline, caption, description, sourceCode, liveDemo }) => {

    return (
        
        <div className='project-container'>
            <div className='project-preview'>
                <img src={require(`../../Static/img/${image}.png`)}></img>                
            </div>
            <div className='project-details'>
                <h1>{title}</h1>
                <h2>{headline}</h2>
                <h3>{caption}</h3>
                <p>{description}</p>                
            </div>
            <div className='project-links'>
                <a href={`${sourceCode}`} target='blank'></a>
                <a href={`${liveDemo}`} target='blank'></a>             
            </div>
        </div>
    )

}

export default FeaturedProject;   