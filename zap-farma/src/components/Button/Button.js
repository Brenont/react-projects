import React, { Component } from 'react';
import "./Button.scss";

export default class Button extends Component {

  render() {
    return(
    <button
      style={{height: this.props.height,
              width: this.props.width,
              fontSize: this.props.fontSize
        }} 
    >{this.props.text}</button>
    
    );
  }
}
