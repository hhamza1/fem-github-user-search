import React from 'react';

import './Sass/InputField.scss';


const InputField = ({user, onChangeHandler}) => {
    return (
        <input 
            type="text" 
            className="input-field"
            onChange = {onChangeHandler}
            id = "username"
            name = 'username'
            value = {user.login}
            placeholder='Search Github username...'/>
    )
}

export default InputField;