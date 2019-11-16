import React, { Component } from 'react';
import "./Header.scss";
import logo from "../../assets/img/logo.png"

// import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <header>
        <span></span>
        <img className="logo" src={logo}/>
        <i>
          <div></div>
          <div></div>
          <div></div>
        </i>
      </header>
      
      )
    
  }
}
