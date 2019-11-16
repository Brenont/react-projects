import React, { Component } from "react";
import "./Card.scss"
import Button from "../Button/Button";
// import storageSettings, 
// { addToCart,
//   initStorage,
//   deleteProduct,
//   updateStorage,
//  } from "../../services/LocalStorage.js";

export default class Card extends Component {
  

  render() {
    return (
      <div className="card">
        <img src={this.props.data.img} alt="" />
        <p>{this.props.data.name}</p>
        <b>{this.props.data.price_string}</b>
        <Button text="COMPRAR" height="25px" width="80px" fontSize="10px" />
      </div>
    );
  }
}
