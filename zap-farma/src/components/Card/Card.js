import React, { Component } from "react";
import "./Card.scss"
import Button from "../Button/Button";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="" />
        <p>{this.props.name}</p>
        <b>{this.props.price}</b>
        <Button text="COMPRAR" height="25px" width="80px" fontSize="10px" />
      </div>
    );
  }
}
