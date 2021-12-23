import React from 'react';

import InputField from '../components/InputField';
import SearchBtn from '../components/SearchBtn';

import Magnifier from '../assets/icon-search.svg';
import './SearchBar.scss'


const SearchBar = () => {
    return (
        <div className='searchbar'>
            <img src={Magnifier} alt="search username" />
            <InputField />
            <SearchBtn />
        </div>
    )
}

export default SearchBar;