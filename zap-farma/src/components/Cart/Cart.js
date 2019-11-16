import React, { Component } from 'react';
import "./Cart.scss";
import exit from "../../assets/img/exit.png";
import Button from "../Button/Button";
import ItemCart from '../ItemCart/ItemCart';

export default class Cart extends Component {

  render() {
    return(
      <section className="modal-container">
        <div className="modal-content">

          <header>
            <i></i>
            <h3>Meus produtos</h3>
            {/* <i>X</i> */}
            <img src={exit} alt="close" onClick={this.props.toogle}/>
          </header>

          <>
            <ItemCart />
            <ItemCart />
            
          </>

          <footer>
            <h4>Total: R$ 61,78</h4>
            <Button text="CONFIRMAR PEDIDO" width="150px" height="34.01px" bg="#047A8F" />
          </footer>

        </div>
      </section>
    );
  }
}
