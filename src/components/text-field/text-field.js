import React from 'react';

import './text-field.css';

const TextField = (props) => {
    const { name, customTag, onInputChange } = props;
    return (
        <div className="text-field">
            <label>
                <div>{name}</div>
                <textarea
                    className="text-field__input"
                    onInput={(e) => {
                        onInputChange(e, customTag)
                    }}
                ></textarea>
            </label>
        </div>
    )
}

export default TextField;