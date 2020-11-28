import React, {Component} from 'react';

export default class Input extends Component{

    render(){

        return(

            <div>

                <label for={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} class="form-control" id={this.props.id} ></input>

            </div>

        )

    }

}