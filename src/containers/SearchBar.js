import React from 'react';

import InputField from '../components/InputField';
import SearchBtn from '../components/SearchBtn';

import Magnifier from '../assets/icon-search.svg';
import './Sass/SearchBar.scss'


const SearchBar = ({searchUser}) => {
    return (
        <div className='searchbar'>
            <img src={Magnifier} alt="search username" />
            <InputField searchUser={searchUser}/>
            <SearchBtn />
        </div>
    )
}

export default SearchBar;