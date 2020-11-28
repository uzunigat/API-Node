import React, {Component} from 'react';
import render from 'react-dom';
import Input from '../FormComponents/Input';

//Components

export default class Register extends Component{

    render() {

        return(

            <div className="container p-5">

                <form className="form-group">

                    <Input label="Name" type="text" id="NameInput"/>
                    <Input label="LastName" type="text" id="LastNameInput"/>
                    <Input label="Phone Number" type="text" id="PhoneInput"/>
                    <Input label="Email" type="email" id="EmailInput"/>
                    <Input label="Password" type="password" id="PasswordInput"/>
                    <Input label="Confirm Password" type="password" id="ConfirmPasswordInput"/>

                    <button type="submit" class="btn btn-primary my-5"> Register </button>

                </form>

            </div>
        );

    
    }

}