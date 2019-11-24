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
            <div className="App">
                <header className="App-header">
                    <p>
                        {definition}
                    </p>
                    <Button variant="primary" onClick={this._redefineDefinition}>Primary</Button>
                </header>
            </div>
        )
    }
}

export default Main