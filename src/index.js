import React from 'react';
import ReactDOM from 'react-dom';
import LoopCheckbox from './components/loop-checkbox/loop-checkbox';
import Loop from './components/loop/loop';
import Question from './components/question/question';
import Output from './components/output/output';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loopChecked: false
        }
    }

    OnLoopCheckboxChange = (e) => {
        this.setState({
            loopChecked: e.target.checked
        })
    }

    render() {

        let loop;
        if (this.state.loopChecked) {
            loop = <Loop />;
        }

        return (
            <div className="app">
                <LoopCheckbox
                    OnLoopCheckboxChange={this.OnLoopCheckboxChange} />
                {loop}
                <Question />
                <Output />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);