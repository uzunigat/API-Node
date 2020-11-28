import React, {Component} from 'react';
import render from 'react-dom';
import {Link} from 'react-router-dom'

// Import Components
import NavElement from './NavComponents/NavElement';

export default class Header extends Component{

    render(){

        return(

            <div>
                
                <nav className="navbar navbar-dark bg-dark ">
                    <a className="navbar-brand" href="#"> CV-Bank </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/"> <NavElement className="nav-item active" value="Home"/> </Link>
                            <Link to="/Register"> <NavElement className="nav-item" value="Register"/> </Link>
                        </ul>
                    </div>
                
                </nav>

            </div>

        );

    };


}