import React from 'react';
import './FeaturedProject.css'


const FeaturedProject = ({ image, title, headline, caption, description, sourceCode, liveDemo }) => {

    return (
        
        <div className='project-container' style={{ backgroundImage: `url(../../Static/img/${image}.png)` }}>
            <div className='project-preview'>
                <img src={require(`../../Static/img/${image}.png`)}></img>                
            </div>
            <div className='project-details'>
                <div className='project-verbiage'>
                    <h1>{title}</h1>
                    <h2>{headline}</h2>
                    <h3>{caption}</h3>
                    <p>{description}</p>                
                    <button><a href={`${sourceCode}`} target='blank'>GIT REPO</a></button>
                    <button><a href={`${liveDemo}`} target='blank'>LIVE DEMO</a></button>             
                </div>                
            </div>

        </div>
    )

}

export default FeaturedProject;   