import React from 'react';

import './Sass/SearchBtn.scss';

const SearchBtn = ({submitHandler}) => {
    return(
        <button className='search-btn' onClick={submitHandler}>
            Search
        </button>
    )
}

export default SearchBtn