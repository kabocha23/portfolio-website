import React from 'react';
import './ProjectComponent.css'


const ProjectComponent = ({ image, title, headline, caption, description, sourceCode, liveDemo }) => {

    return (
        <div className='indi-proj'>
            <div>
                <img src={require(`..Static/img/${image}.png`)}></img>                
            </div>
            <div>
                <h1>{title}</h1>
                <h2>{headline}</h2>
                <h3>{caption}</h3>
                <p>{description}</p>                
            </div>
            <div>
                <a href={`${sourceCode}`}></a>
                <a href={`${liveDemo}`}></a>             
            </div>

        </div>
    )

}

export default ProjectComponent;   