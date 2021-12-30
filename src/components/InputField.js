import React from 'react';

import './Sass/InputField.scss';


const InputField = ({searchUser}) => {
    return (
        <input 
            type="text" 
            className="input-field"
            onChange={searchUser}
            id = "username"
            name='username' 
            placeholder='Search Github username...' />
    )
}

export default InputField;