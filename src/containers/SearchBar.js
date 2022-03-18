import React, {useContext} from 'react';

import InputField from '../components/InputField';
import SearchBtn from '../components/SearchBtn';

import { ThemeContext } from '../contexts/ThemeContext';

import Magnifier from '../assets/icon-search.svg';
import './Sass/SearchBar.scss';


const SearchBar = ({user, submitHandler, setUser, userData}) => {

    const {isDark} = useContext(ThemeContext);

    return (
        <form className={isDark === false ? 'searchbar' : 'searchbar searchbar__dark'} onSubmit={submitHandler}>
            <img src={Magnifier} alt="search username" />
            <InputField user={user} setUser={setUser}/>
            {userData.login !== undefined ? '': <span className='error-message'>No Results</span>}
            <SearchBtn />
        </form>
    )
}

export default SearchBar;