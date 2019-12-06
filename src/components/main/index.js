import React from 'react';
import Rita from 'rita';
import Button from 'react-bootstrap/Button';
import grammar from './../../grammar.json';
// var rita = require('rita');

class Main extends React.Component {
    state = {
        definition: "definition is loading, hold on a minute",
    };
    ritaGrammar = new Rita.RiGrammar(grammar);

    componentDidMount = () => {
        this._redefineDefinition()
    }

    _redefineDefinition = () => {
        const definition = this.ritaGrammar.expand();
        this.setState({ definition: definition })
    }

    render = () => {
        const { definition } = this.state
        return (
            <div className="app">
                <div className="app-header">
                    <div className="definition-box">
                        <strong>technology</strong> <em>/tek-ˈnä-lə-jē/ n. (pl.</em> <strong>-technologies</strong><em>)</em>
                        <br/>
                        <span id="definition"> {definition}</span>
                    </div>
                    <Button className="light-btn" variant="light" onClick={this._redefineDefinition}>Wait, what?</Button>
                </div>
                <div className="footer">
                    Created by <a href="https://tirtawr.com/" target="_blank" rel="noopener noreferrer">tirtawr</a>. 
                    Generated using <a href="https://rednoise.org/rita/reference/RiGrammar.php" target="_blank" rel="noopener noreferrer">Rita</a> with 
                    this <a href="https://github.com/tirtawr/definition-of-technology/blob/master/src/grammar.json" target="_blank" rel="noopener noreferrer">grammar file</a>. 
                    Inspired by <a href="http://www.gamedefinitions.com/" target="_blank" rel="noopener noreferrer">gamedefinitions</a>.
                </div>
            </div>
        )
    }
}

export default Main