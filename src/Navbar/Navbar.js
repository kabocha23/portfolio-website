import React, { useState, useRef } from 'react';
import './Navbar.css';

const Navbar = ({ isNavExpanded, setIsNavExpanded, toggleIsNav, handleHomeClick, handleAboutClick, handleProjectsClick, handleSkillsClick }) => {

    return (
        <div className='nav-container'>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-home'>
                        <button onClick={handleHomeClick}>JK</button>
                    </div>
                    <div className='toggle-button'>
                        <button
                            type='button'
                            title='col-nav-btn'
                            onClick={toggleIsNav}
                        >
                            ☰
                        </button>
                    </div>
                    <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                        <ul>
                            <li><button onClick={handleAboutClick}>About</button></li>
                            <li><button onClick={handleProjectsClick}>Projects</button></li>
                            <li><button onClick={handleSkillsClick}>Skills</button></li>
                        </ul>
                    </div>
                    <div className='nav-menu-fs'>
                        <div className='nav-menu-fs-sub'>
                            <button onClick={handleAboutClick}>About</button>
                            <button onClick={handleProjectsClick}>Projects</button>
                            <button onClick={handleSkillsClick}>Skills</button>
                        </div>                
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;