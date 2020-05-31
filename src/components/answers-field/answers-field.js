import React from 'react';

import './answers-field.css';

const AnswersField = (props) => {
    return (
        <label className="answers-field">
            <div>{props.name}</div>
            <textarea className="answers-field__input">
            </textarea>
        </label>
    )
};

export default AnswersField