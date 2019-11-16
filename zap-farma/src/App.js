import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import naldecon from "./assets/img/naldecon.png"
import Button from './components/Button/Button';
import { produtos } from './produtos';
import Card from './components/Card/Card';
import CartButton from './components/CartButton/CartButton';

function App() {
  return (
    <>
      <Header />
      <section className="banner">
        <>
          <img className="banner-product" src={naldecon}/>
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
            <Card img={produto.img} name={produto.name} price={produto.price_string} />
          )
        })} 
        {produtos.map(produto => {
          return (
            <Card img={produto.img} name={produto.name} price={produto.price_string} />
          )
        })}
      </section>

      <h2 className="section-title">Especialmente para você</h2>
      <section className="cards-container">
        {produtos.map(produto => {
          return (
            <Card img={produto.img} name={produto.name} price={produto.price_string} />
          )
        })}
        {produtos.map(produto => {
          return (
            <Card img={produto.img} name={produto.name} price={produto.price_string} />
          )
        })}
      </section>

      <CartButton />
    </>
  );
}

export default App;
