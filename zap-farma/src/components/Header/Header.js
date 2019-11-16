import React, { Component } from 'react';
import "./Header.scss";
import logo from "../../assets/img/logo.png"
import Menu from './Menu/Menu';

// import { Container } from './styles';

export default class Header extends Component {

  state = {
    menu: false
  }

  toogleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
    console.log(this.state.menu)
  }

  render() {
    return (
      <>
        <header className="header">
          <span></span>
          <img className="logo" src={logo} alt="zapfarma"/>
          <i onClick={this.toogleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </i>
        </header>
        { this.state.menu ? <Menu openCart={this.props.openCart} right="0"/> : <Menu openCart={this.props.openCart} right="-130px"/>}
      </>
      )
    
  }
}
