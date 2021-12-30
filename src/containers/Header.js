import React from 'react';

import IconMoon from '../assets/icon-moon.svg';

import './Sass/Header.scss';


const Header = () => {
    return(
        <div className='header'>
            <h1 className='header__logo'>
                devfinder
            </h1>
            <button className='header__theme-btn'>
                <span 
                    className='header__theme-btn--txt'>
                        Dark
                </span>
                <img 
                    className='header__theme-btn--icon' 
                    src={IconMoon} 
                    alt="Dark Mode" />
            </button>
        </div>
    )
}

export default Header;