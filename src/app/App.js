import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Import Components
import Header from './Header';
import Home from './Routes/Home';
import Register from './Routes/Register';

export default class App extends Component {

    render() {

        return (

            <Router>
                <Header/>

                 <Route path="/" exact component={Home}/>
                 <Route path="/Register" component={Register}/>

            </Router>

        );

    }

}

