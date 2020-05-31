import React from 'react';
import './loop-checkbox.css';

const LoopCheckbox = (props) => {

    const { OnLoopCheckboxChange } = props;

    return (
        <label className="loop-checkbox" htmlFor="loop-checkbox">
            Loop
            <input
                type="checkbox"
                id="loop-checkbox" 
                onChange={OnLoopCheckboxChange}/>
        </label>
    )
}

export default LoopCheckbox;