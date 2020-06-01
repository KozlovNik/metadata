import React from 'react';

import './output-field.css';

const OutputField = (props) => {

    let { loopName, loopText, loopAnswers, questionName, questionText, questionAnswers, questionType } = props;
    let value = `${questionName} ${questionText}\n${questionType}\n${questionAnswers}`;
    
    if (loopName || loopText || loopAnswers) {
        value = value.replace(/\n/g, "\n\t").replace(/^/, "\t");
        value = `${loopName} ${loopText} \nloop\n{\n${loopAnswers}\n} fields\n(\n${value}\n) expand;`
    }
    return (
        <label className="output-field">
            <div>Вывод</div>
            <textarea className="output-field__input" value={value} />
        </label>
    )
}

export default OutputField;