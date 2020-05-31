import React from 'react';
import NameField from '../name-field/name-field';
import TextField from '../text-field/text-field';
import AnswersField from '../answers-field/answers-field';
import TypeField from '../type-field/type-field';
import './question.css';

const Question = (props) => {
    return (
        <div className="question">
            <NameField name="Имя вопроса" />
            <TextField name="Текст вопроса" />
            <TypeField />
            <AnswersField name="Варианты ответов вопроса" />
        </div>
    )
};

export default Question;