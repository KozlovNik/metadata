import React from 'react';

const TypeField = (props) => {
    return (
        <label className="field-type">
            <div>Тип вопроса</div>
            <select className="field-type__select">
                <option value="empty"></option>
                <option value="SA">SA</option>
                <option value="MA">MA</option>
                <option value="LONG">LONG</option>
                <option value="TEXT">TEXT</option>
                <option value="INFO">INFO</option>
            </select>
        </label>
    );
}

export default TypeField;