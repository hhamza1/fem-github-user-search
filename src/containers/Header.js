import React, {useContext} from 'react';

import { ThemeContext } from '../contexts/ThemeContext';


import {ReactComponent as IconMoon} from '../assets/icon-moon.svg';
import {ReactComponent as IconSun} from '../assets/icon-sun.svg';

import './Sass/Header.scss';


const Header = () => {

    const {isDark, setIsDark} = useContext(ThemeContext);


    return(
        <div className='header'>
            <h1 className={isDark === false ? 'header__logo' : 'header__logo header__logo--dark'}>
                devfinder
            </h1>
            <button 
                className={isDark === false ? 'header__theme-btn' : 'header__theme-btn header__theme-btn--dark'} 
                onClick={()=>setIsDark(!isDark)}>
                <span 
                    className='header__theme-btn--txt'>
                        {isDark === false ? 'Dark' : 'Light'}
                </span>
                {isDark === false ? 
                <IconMoon className='header__theme-btn--icon' /> : 
                <IconSun className='header__theme-btn--icon' />}
            </button>
        </div>
    )
}

export default Header;