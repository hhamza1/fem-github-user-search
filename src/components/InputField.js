import React from 'react';

import './InputField.scss';


const InputField = () => {
    return (
        <input 
            type="text" 
            className="input-field"
            id = "username"
            name='username' 
            placeholder='Search Github username...' />
    )
}

export default InputField;