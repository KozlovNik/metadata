import React from 'react';
import './effect-button.css';

const EffectButton = (props) => {
    return (
        <button className="effect-button">
            {props.name}
        </button>
    )
}

export default EffectButton