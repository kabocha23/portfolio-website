import React from 'react';
import './FeaturedProject.css'


const FeaturedProject = ({ image, title, headline, caption, description, sourceCode, liveDemo }) => {
    console.log(image)
    return (
        
        <div className='project-container'>
            <div className='project-preview'>
                <img src={require(`../Static/img/${image}.png`)}></img>                
            </div>
            <div className='project-details'>
                <h1>{title}Why isnt this showing up?</h1>
                <h2>{headline}</h2>
                <h3>{caption}</h3>
                <p>{description}</p>                
            </div>
            <div className='project-links'>
                <a href={`${sourceCode}`}></a>
                <a href={`${liveDemo}`}></a>             
            </div>

        </div>
    )

}

export default FeaturedProject;   