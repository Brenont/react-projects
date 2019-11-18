import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import naldecon from "../../assets/img/naldecon.png"
import Button from '../../components/Button/Button';
import { produtos } from '../.././produtos';
import Card from '../../components/Card/Card';
import CartButton from '../../components/CartButton/CartButton';
import Cart from '../../components/Cart/Cart';
import "./Home.scss"


export default class Home extends Component {

  state = {
    cartModal: false
  }

 toogleCart = () => {
  this.setState({
    cartModal: !this.state.cartModal
  })
}

  render() {
    return (
      <>
      <Header openCart={this.toogleCart} />
      <section className="banner">
        <>
          <img className="banner-product" src={naldecon} alt="naldecon"/>
          <span className='balloon-price'>R$ 8,68</span>
        </>
        <div className="banner-text">
          <div>
            <h1>Naldecon Dia/Noite</h1>
            <p>24 Comprimidos <br/> Paracetamol, Cloridrato de Fenilefrina</p>
          </div>

          <div className="button-area">
            <Button text="COMPRAR" height="32px" width="88px" />
          </div>
        </div>
      </section>
      
      <h2 className="section-title">Aproveite também</h2>
      <section className="cards-container">
        {produtos.map(produto => {
          return (
            <Card key={produto.id.toString()} data={produto} />
          )
        })} 
      </section>

      <h2 className="section-title">Especialmente para você</h2>
      <section className="cards-container">
        {produtos.map(produto => {
          return (
            <Card key={produto.id.toString()} data={produto} />
          )
        })}
      </section>

      <CartButton action={this.toogleCart} />
      {this.state.cartModal ? (<Cart toogle={this.toogleCart} />): false}
    </>
    );
  }
}