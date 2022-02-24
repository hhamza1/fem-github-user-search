import React from 'react';

import InputField from '../components/InputField';
import SearchBtn from '../components/SearchBtn';

import Magnifier from '../assets/icon-search.svg';
import './Sass/SearchBar.scss';


const SearchBar = ({user, submitHandler, setUser}) => {

    return (
        <form className='searchbar' onSubmit={submitHandler}>
            <img src={Magnifier} alt="search username" />
            <InputField user={user} setUser={setUser}/>
            <SearchBtn />
        </form>
    )
}

export default SearchBar;