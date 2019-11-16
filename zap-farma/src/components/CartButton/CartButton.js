import React, { Component } from 'react';
import "./CartButton.scss"
import cart from "../../assets/img/cart.png"

export default class CartButton extends Component {
  render() {
    return(
      <button onClick={this.props.action} className="cart-btt">
        <img src={cart} alt="cart"/>
      </button>
    );
  }
}
