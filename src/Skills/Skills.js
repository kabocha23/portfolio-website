import React from 'react';
import koSamuiBg from '../Static/img/kosamui2.jpg';
import './Skills.css';
import { Parallax } from 'react-parallax';

const Skills = () => {

    return(
        <div className='skills-container'>
            <Parallax
                blur={0}
                bgImage={koSamuiBg}
                bgImageAlt="ko-samui"
                strength={400}
            >
                <div className='skills-header-box'>
                    <h1 className='skills-header'>Technical Skills</h1>
                </div>
            </Parallax>
            {/* end parallax image and title */}
            {/* begin listing skills  */}
            <div className='skills-content-box'>
                <div className='frontend-box skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Front End</h3></li>
                        <li className='skills-item'><p>React</p></li>
                        <li className='skills-item'><p>Angular</p></li>
                        <li className='skills-item'><p>HTML, CSS</p></li>
                        <li className='skills-item'><p>RESTful APIs</p></li>
                        <li className='skills-item'><p>Responsive Web Design</p></li>
                    </ul>
                </div>
                <div className='backend-box skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Back End</h3></li>
                        <li className='skills-item'><p>Node.js</p></li>
                        <li className='skills-item'><p>AWS</p></li>
                        <li className='skills-item'><p>Django</p></li>
                        <li className='skills-item'><p>Flask</p></li>
                    </ul>
                </div>                
                <div className='languages-box skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Languages</h3></li>
                        <li className='skills-item'><p>Javascript</p></li>
                        <li className='skills-item'><p>Python</p></li>
                        <li className='skills-item'><p>Swift</p></li>
                    </ul>
                </div>
                <div className='data-box skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Data</h3></li>
                        <li className='skills-item'><p>MySQL</p></li>
                        <li className='skills-item'><p>MongoDB</p></li>
                        <li className='skills-item'><p>GraphQL</p></li>
                    </ul>
                </div>
                <div className='BI-box skill-box'>
                    <ul>
                        <li className='skills-subhead'><h3>Analytics / Reporting</h3></li>
                        <li className='skills-item'><p>Tableau</p></li>
                        <li className='skills-item'><p>Google Data Studio</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;