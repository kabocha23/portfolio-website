import React, { Component } from 'react';
import './Intro.css';


class Intro extends Component{

    render(){
        return(
            <div className='intro-container'>
                <h1 className='intro-name'>Jason Kobuchi</h1>
                <h3 className='intro-title'>Web Developer</h3>  
            </div>
        )
    }
}

export default Intro;