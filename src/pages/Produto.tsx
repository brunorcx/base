import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import { Product } from "../componentes/Product";
import "../styles/produtoPage.css";
import React, { Component } from "react";

export class Produto extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default Produto;
