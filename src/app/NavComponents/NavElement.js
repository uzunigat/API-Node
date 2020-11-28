import React, {Component} from 'react';
import render from 'react-dom';

export default class NavElement extends Component{

    render() {

        return (
        
            <li>

                    <a className="nav-link" href="#"> {this.props.value} </a>

            </li>

        );

    }
                    

}