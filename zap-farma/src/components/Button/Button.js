import React, { Component } from 'react';
import "./Button.scss";

export default class Button extends Component {

  render() {
    return(
    <button
    // onClick={this.props.action(this.props.data)}
      className="btt"
      style={{height: this.props.height,
              width: this.props.width,
              fontSize: this.props.fontSize,
              backgroundColor: this.props.bg
        }} 
    >{this.props.text}</button>
    
    );
  }
}
