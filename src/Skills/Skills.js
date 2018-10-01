import React, { Component } from 'react';
import './Skills.css';
import { Parallax } from 'react-parallax';

class Skills extends Component{


    render(){
        return(
            <div className='skills-container'>
                <Parallax
                    blur={0}
                    bgImage={ require('../Static/img/kosamui2.jpg') }
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
                    <div className='languages-box skill-box'>
                        <ul>
                            <li className='skills-subhead'><h3>Languages</h3></li>
                            <li className='skills-item'><p>JavaScript (ES6)</p></li>
                            <li className='skills-item'><p>Python</p></li>
                            <li className='skills-item'><p>Swift</p></li>
                            <li className='skills-item'><p>HTML</p></li>
                            <li className='skills-item'><p>CSS</p></li>
                        </ul>
                    </div>
                    <div className='frontend-box skill-box'>
                        <ul>
                            <li className='skills-subhead'><h3>Front End</h3></li>
                            <li className='skills-item'><p>React / Redux</p></li>
                            <li className='skills-item'><p>Angular</p></li>
                            <li className='skills-item'><p>jQuery</p></li>
                            <li className='skills-item'><p>AJAX, JSON</p></li>
                            <li className='skills-item'><p>RESTful APIs</p></li>
                            <li className='skills-item'><p>Responsive Web Design</p></li>
                            <li className='skills-item'><p>Bootstrap</p></li>
                        </ul>
                    </div>
                    <div className='backend-box skill-box'>
                        <ul>
                            <li className='skills-subhead'><h3>Back End</h3></li>
                            <li className='skills-item'><p>Node.js</p></li>
                            <li className='skills-item'><p>Express</p></li>
                            <li className='skills-item'><p>AWS</p></li>
                            <li className='skills-item'><p>Firebase</p></li>
                            <li className='skills-item'><p>Heroku</p></li>
                            <li className='skills-item'><p>Gunicorn</p></li>
                            <li className='skills-item'><p>NPM / Yarn</p></li>
                            <li className='skills-item'><p>Postman</p></li>
                            <li className='skills-item'><p>Socket.io</p></li>
                            <li className='skills-item'><p>Auth0</p></li>
                            <li className='skills-item'><p>Django</p></li>
                            <li className='skills-item'><p>Flask</p></li>
                        </ul>
                    </div>
                    <div className='database-box skill-box'>
                        <ul>
                            <li className='skills-subhead'><h3>Database</h3></li>
                            <li className='skills-item'><p>MongoDB</p></li>
                            <li className='skills-item'><p>Firebase</p></li>
                            <li className='skills-item'><p>MySQL</p></li>
                            <li className='skills-item'><p>SQLite</p></li>
                            <li className='skills-item'><p>GraphQL</p></li>
                        </ul>
                    </div>
                    <div className='mobile-box skill-box'>
                        <ul>
                            <li className='skills-subhead'><h3>Mobile</h3></li>                        
                            <li className='skills-item'><p>React Native</p></li>
                            <li className='skills-item'><p>Swift</p></li>
                            <li className='skills-item'><p>Xcode</p></li>
                            <li className='skills-item'><p>Android Studios</p></li>
                        </ul>
                    </div>
                    <div className='version-control-box skill-box'>
                        <ul>
                            <li className='skills-subhead'><h3>Version Control</h3></li>
                            <li className='skills-item'><p>Github</p></li>
                            <li className='skills-item'><p>Bitbucket</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;