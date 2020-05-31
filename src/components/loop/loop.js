import React from 'react';
import NameField from '../name-field/name-field';
import TextField from '../text-field/text-field';
import AnswersField from '../answers-field/answers-field';
import './loop.css';

const Loop = () => {
    return (
        <div className="loop">
            <NameField name="Имя лупа" />
            <TextField name="Текст лупа" />
            <AnswersField name="Варианты ответов лупа" />
        </div>
    )
};

export default Loop;