import React from 'react';
import './ProjectComponent.css'

const [projectDetails, setProjectDetails] = useState([
    {
        title: 'Shortly, URL Shortening Application',
        headline: 'Shortly',
        caption: 'React, Shrtcode API',
        image: 'shortly-preview',
        description: 'A responsive web/mobile application that shortens the user\'s URL by tapping into the Shrtcode API. \nFeatures include: \n- input allowing user to make API call and shorten any url \n- dynamically generated search history list with copy to clipboard button \n- navbar transitioning to hidden menu (sliding in from top) \n- responsive design for web and mobile',
        sourceCode: 'https://github.com/kabocha23/URL-Shortener',
        liveDemo: 'https://kabocha23.github.io/URL-Shortener'
    },
])


const ProjectComponent = ({ }) => {

    return (
        <div className='indi-proj'>
            <div>
                <img src={require(`..Static/img/${projectDetails.image}.png`)}></img>                
            </div>
            <div>
                <h1>{projectDetails.title}</h1>
                <h2>{projectDetails.headline}</h2>
                <h3>{projectDetails.caption}</h3>
                <p>{projectDetails.description}</p>                
            </div>
            <div>
                <a href={`${projectDetails.sourceCode}`}></a>
                <a href={`${projectDetails.liveDemo}`}></a>             
            </div>

        </div>
    )

}

export default ProjectComponent;   