import React, { Component } from "react";
import "./ItemCart.scss"
import trash from "../../assets/img/trash.png";
import plus from "../../assets/img/plus.png"
import less from "../../assets/img/less.png"
import vick from "../../assets/img/vick.png";


export default class ItemCart extends Component {
  render() {
    return (
      <div className="cart-item">
        <div>
          <img src={vick} alt="" />
          <button className="delete-item">
            Excluir item <img src={trash} alt="" />{" "}
          </button>
        </div>
        <div>
          <span className="quantity">
            <button><img src={less} alt=""/></button>
            <input value="1" />
            <button><img src={plus} alt=""/></button>
          </span>
          <p>
            Vick Vaporub<br/> Ungento 50g
          </p>
          <b>R$ 30,89 x1 = R$ 30,89</b>
        </div>
      </div>
    );
  }
}
