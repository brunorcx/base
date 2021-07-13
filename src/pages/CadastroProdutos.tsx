import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import DenseTable from "../componentes/tabelaProdutos";
import "../styles/cadastroProdutos.css";
import React, { Component } from "react";

export class Produto extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DenseTable />
        <Footer />
      </div>
    );
  }
}

export default Produto;
