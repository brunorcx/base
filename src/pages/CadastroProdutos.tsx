import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import "../styles/cadastroProdutos.css";
import React, { Component } from "react";
import { MDCDataTable } from "@material/data-table";

export class Produto extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default Produto;
