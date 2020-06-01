import React from 'react';
import './output.css';
import EffectButton from '../effect-button/effect-button';
import ColorChoice from '../color-choice/color-choice';
import OutputField from '../output-field/output-field';

const Output = (props) => {
    return (
        <div className="output">
            <OutputField {...props} />
            <EffectButton name="bold" />
            <EffectButton name="underline" />
            <EffectButton name="italic" />
            <ColorChoice />
            <EffectButton name="color" />
        </div>
    )
}

export default Output;