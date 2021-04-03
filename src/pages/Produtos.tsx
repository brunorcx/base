import { Navbar } from "../componentes/Navbar";
import { Sidebar } from "../componentes/Sidebar";
import { ListProdutos } from "../componentes/ListProdutos";
import { Footer } from "../componentes/Footer";
import "../styles/produtos.css";
import React, { Component } from "react";
import { Carrinho } from "../componentes/Carrinho";

export class Produtos extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-p" />

        <div className="corpo">
          <Sidebar className="sidebar-p" />
          <ListProdutos className="list-produtos-p" />
          <Carrinho className="carrinho-menu" />
        </div>
        <Footer className="footer-p" />
      </div>
    );
  }
}

export default Produtos;
