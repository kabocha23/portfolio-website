import React from 'react';
import './FeaturedProject.css'


const FeaturedProject = ({ image, title, headline, caption, description, sourceCode, liveDemo }) => {

    return (
        
        <div className='project-container' style={{ backgroundImage: `url(../../Static/img/${image}.png)` }}>

            <div className='project-details'>
                <div className='project-verbiage'>
                    <h1>{title}</h1>
                    <h3>{headline}</h3>
                    <h4>{caption}</h4>
                    <div className='project-description'>
                        {description.split('\n').map(str => <p>{str}</p>)}
                    </div>
        
                    <button><a href={`${sourceCode}`} target='blank'>GIT REPO</a></button>
                    { liveDemo 
                        ? <button><a href={`${liveDemo}`} target='blank'>LIVE DEMO</a></button>     
                        : ''
                    }        
                </div>                
            </div>
            <div className='project-preview'>
                <img src={require(`../../Static/img/${image}.png`)}></img>                
            </div>
        </div>
    )

}

export default FeaturedProject;   