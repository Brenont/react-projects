import React, { Component } from "react";
import "./Menu.scss";

// import { Container } from './styles';

export default class Menu extends Component {
  render() {
    return (
      <nav className="sidebar"
      style={{right: this.props.right}}
      >
        <p>Olá, Alan</p>
        <ul>
          <li>Últimos Pedidos</li>
          <li onClick={this.props.openCart}>Meu Carrinho</li>
        </ul>
      </nav>
    );
  }
}
