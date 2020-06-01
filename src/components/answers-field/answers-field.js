import React from 'react';

import './answers-field.css';

const AnswersField = (props) => {

    const { name, customTag, onInputChange } = props;

    return (
        <label className="answers-field">
            <div>{name}</div>
            <textarea
                onInput={(e) => {
                    onInputChange(e, customTag)
                }}
                className="answers-field__input">
            </textarea>
        </label>
    )
};

export default AnswersField