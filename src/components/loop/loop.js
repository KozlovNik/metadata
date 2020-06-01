import React from 'react';
import NameField from '../name-field/name-field';
import TextField from '../text-field/text-field';
import AnswersField from '../answers-field/answers-field';
import './loop.css';

const Loop = (props) => {

    const { onInputChange } = props;
    return (
        <div className="loop">
            <NameField
                name="Имя лупа"
                customTag="loopName"
                onInputChange={onInputChange} />
            <TextField
                name="Текст лупа"
                customTag="loopText"
                onInputChange={onInputChange} />
            <AnswersField
                name="Варианты ответов лупа"
                customTag="loopAnswers"
                onInputChange={onInputChange} />
        </div>
    )
};

export default Loop;