import React from 'react';

import InputField from '../components/InputField';
import SearchBtn from '../components/SearchBtn';

import Magnifier from '../assets/icon-search.svg';
import './Sass/SearchBar.scss';


const SearchBar = ({user, submitHandler, onChangeHandler}) => {

    return (
        <div className='searchbar'>
            <img src={Magnifier} alt="search username" />
            <InputField user={user} onChangeHandler={onChangeHandler}/>
            <SearchBtn submitHandler={submitHandler}/>
        </div>
    )
}

export default SearchBar;