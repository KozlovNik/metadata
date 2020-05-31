import React from 'react';

import './text-field.css';

const TextField = (props) => {
    const { name } = props;
    return (
        <div className="text-field">
            <label>
                <div>{name}</div>
                <textarea type="text" className="text-field__input"></textarea>
            </label>
        </div>
    )
}

export default TextField;