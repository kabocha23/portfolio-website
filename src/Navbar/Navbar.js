import React from 'react';
import './Navbar.css';

const Navbar = ({ isNavExpanded, setIsNavExpanded, navBgColor, setNavBgColor, handleHomeClick, handleAboutClick, handleProjectsClick, handleSkillsClick, handleContactClick }) => {

    const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded)
    }
  
    const changeNavbarColor = () =>{
      if(window.scrollY >= 50){
        setNavBgColor(true);
      }
      else{
        setNavBgColor(false);
      }
    }
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <div className={navBgColor ? 'nav-container colorBg' : 'nav-container transpBg'}>
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
                <ul className={navBgColor ? 'nav-ul colorBg' : 'nav-ul transpBg'}>
                    <li><a onClick={handleAboutClick}>About</a></li>
                    <li><a onClick={handleProjectsClick}>Projects</a></li>
                    <li><a onClick={handleSkillsClick}>Skills</a></li>
                    <li><a onClick={handleContactClick}>Contact</a></li>
                </ul>
            </div>
            <div className='nav-menu-fs'>
                <div className='nav-menu-fs-sub'>
                    <a onClick={handleAboutClick}>About</a>
                    <a onClick={handleProjectsClick}>Projects</a>
                    <a onClick={handleSkillsClick}>Skills</a>
                    <a onClick={handleContactClick}>Contact</a>
                </div>                
            </div>
        </div>
    )

}

export default Navbar;