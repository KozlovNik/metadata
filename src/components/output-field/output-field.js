import React from 'react';

import './output-field.css';

const OutputField = () => {
    return (
        <label className="output-field">
            <div>Вывод</div>
            <textarea className="output-field__input"></textarea>
        </label>
    )
}

export default OutputField;