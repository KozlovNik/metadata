import React from 'react';
import NameField from '../name-field/name-field';
import TextField from '../text-field/text-field';
import AnswersField from '../answers-field/answers-field';
import TypeField from '../type-field/type-field';
import './question.css';

const Question = (props) => {
    const { onInputChange } = props;

    return (
        <div className="question">
            <NameField name="Имя вопроса"
                customTag="questionName"
                onInputChange={onInputChange} />
            <TextField name="Текст вопроса"
                customTag="questionText"
                onInputChange={onInputChange} />
            <TypeField />
            <AnswersField name="Варианты ответов вопроса"
                customTag="questionAnswers"
                onInputChange={onInputChange} />
        </div>
    )
};

export default Question;