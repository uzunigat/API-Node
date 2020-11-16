import React, {Component} from 'react';                                      // Destructuring
import {render} from 'react-dom';

class App extends Component {

    render() {

        return (

            <h1> Hello World with React </h1>

        );

    }

}

render(<App/>, document.getElementById("app"));