import React, { Component } from "react";
import "../styles/carrinho-menu.css";

export class Carrinho extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Carrinho de compras</h1>
        </header>
        <body className="body">
          <p>Carrinho Produto 1</p>
        </body>
        <footer className="divFooter">
          <p>Olha o footer</p>
        </footer>
      </div>
    );
  }
}

export default Carrinho;
