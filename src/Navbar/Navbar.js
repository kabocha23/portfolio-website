import React from 'react';
import './Navbar.css';

const Navbar = ({ isNavExpanded, setIsNavExpanded, navBgColor, setNavBgColor, handleHomeClick, handleAboutClick, handleProjectsClick, handleSkillsClick, handleContactClick }) => {

    const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded)
      console.log(isNavExpanded)
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
                    <li><button onClick={handleAboutClick}>About</button></li>
                    <li><button onClick={handleProjectsClick}>Projects</button></li>
                    <li><button onClick={handleSkillsClick}>Skills</button></li>
                    <li><button onClick={handleContactClick}>Contact</button></li>
                </ul>
            </div>
            <div className='nav-menu-fs'>
                <div className='nav-menu-fs-sub'>
                    <button onClick={handleAboutClick}>About</button>
                    <button onClick={handleProjectsClick}>Projects</button>
                    <button onClick={handleSkillsClick}>Skills</button>
                    <button onClick={handleContactClick}>Contact</button>
                </div>                
            </div>
        </div>
    )

}

export default Navbar;