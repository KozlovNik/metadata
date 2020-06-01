import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoopCheckbox from './components/loop-checkbox/loop-checkbox';
import Loop from './components/loop/loop';
import Question from './components/question/question';
import Output from './components/output/output';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loopChecked: false,
            loopName: "",
            loopText: "",
            loopAnswers: "",
            questionName: "",
            questionText: "",
            questionAnswers: "",
            questionType: ""
        }
    }

    OnLoopCheckboxChange = (e) => {
        const loopChecked = e.target.checked;
        let obj = { loopChecked };

        if (!loopChecked) {
            obj = {
                ...obj,
                loopName: "",
                loopText: "",
                loopAnswers: ""
            }
        }
        this.setState(obj);
    }

    getLines(value) {
        let codes = "";
        if (value.length > 0) {
            value = value.split("\n");
            value.forEach((line, index, arr) => {
                line = line.trim();
                line = this.getCodeLine(line, index);
                if (index !== arr.length - 1) {
                    line = line + ",\n";
                };
                codes += line;
            })
        }
        return codes;
    };

    getCodeLine(line, ind) {
        var codePattern = /^(\d+)/;
        var textPattern = /^[\d | .]+\s+(.+)/;
        var qCode = codePattern.exec(line)
            ? `_${codePattern.exec(line)[0]}`
            : `_${ind + 1}`;
        var qText = textPattern.exec(line)
            ? textPattern.exec(line)[1]
            : line;
        return `\t${qCode} "${qText}"`;
    };

    onInputChange = (event, tag) => {
        let value
        if (tag === "loopAnswers" || tag === "questionAnswers") {
            value = this.getLines(event.target.value);
        } else if (tag === "loopText" || tag === "questionText") {
            value = event.target.value
                ? `"<b>${event.target.value}</b>"`
                : "";
        } else {
            value = event.target.value;
        }

        this.setState({ [tag]: value })
    }

    // createQuestion(catChoices, loopChoices) {
    //     var qName = qNameInput.value,
    //         qText = qTextInput.value
    //             ? `\"<b>${qTextInput.value}</b>\"`
    //             : "",
    //         qTypeIndex = qTypeInput.selectedIndex,
    //         qType = getMinMaxInputs(qTypeIndex)
    //     qChoices = catChoices
    //         ? `{\n${catChoices}\n};`
    //         : "",
    //         loopText = loopTextInput.value
    //             ? `\"<b>${loopTextInput.value}</b>\"`
    //             : "";

    //     if ([1, 2].includes(qTypeIndex)) {
    //         output.value = `${qName} ${qText}\n${qType}\n${qChoices}`;
    //     } else {
    //         output.value = `${qName} ${qText}\n${qType}`;
    //     }

    //     if (loopChoices || loopNameInput.value || loopText) {
    //         output.value = output.value.replace(/\n/g, "\n\t").replace(/^/, "\t");
    //         output.value = `${loopNameInput.value} ${loopText} \nloop\n{\n${loopChoices}\n} fields\n(\n${output.value}\n) expand;`
    //     }
    // };

    render() {

        let loop = null;
        // const pr = this.state;
        const onInputChange = this.onInputChange;
        if (this.state.loopChecked) {
            loop = <Loop onInputChange={onInputChange} />;
        }

        return (
            <div className="app">
                <LoopCheckbox
                    OnLoopCheckboxChange={this.OnLoopCheckboxChange} />
                {loop}
                <Question onInputChange={onInputChange} />
                <Output
                    {...this.state}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);