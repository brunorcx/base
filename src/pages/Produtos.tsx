import { Navbar } from "../componentes/Navbar";
import { Sidebar } from "../componentes/Sidebar";
import { ListProdutos } from "../componentes/ListProdutos";
import { Footer } from "../componentes/Footer";
import "../styles/produtos.css";
import React, { Component } from "react";

export class Produtos extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" />
        <div className="corpo">
          <Sidebar className="sidebar" />
          <ListProdutos className="list-produtos" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Produtos;
