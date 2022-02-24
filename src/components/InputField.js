import React from 'react';

import './Sass/InputField.scss';


const InputField = ({user, setUser}) => {
    return (
        <input 
            type="text" 
            className="input-field"
            onChange = {e => setUser(e.target.value)}
            id = "username"
            name = 'username'
            value = {user}
            placeholder='Search Github username...'/>
    )
}

export default InputField;