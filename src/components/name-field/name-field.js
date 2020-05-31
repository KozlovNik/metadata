import React, { Component } from 'react';
import './name-field.css'


export default class NameField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    onInput = (e) => {
        const res = /^[0-9a-zA-Z\s_]*$/.test(e.target.value);
        this.setState(() => {
            return {
                error: !res
            }
        })
    }

    render() {
        const { name } = this.props;
        return (
            <label className="name-field">
                <div>{name}</div>
                <input
                    name="name-field__input"
                    type="text"
                    className="name-field__input"
                    onInput={this.onInput} />
                <div className="name-field__error">
                    {this.state.error &&
                        "Имя вопроса имеет русские буквы"}
                </div>
            </label>


        )
    }
}