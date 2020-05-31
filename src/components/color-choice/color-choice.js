import React from 'react';

import './color-choice.css';

const ColorChoice = () => {
    return (
        <select class="question-type__select">
            <option value="teal">teal</option>
            <option value="blue">blue</option>
            <option value="red">red</option>
        </select>
    )
}

export default ColorChoice;