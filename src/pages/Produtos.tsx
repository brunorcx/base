import { Navbar } from "../componentes/Navbar";
import { Sidebar } from "../componentes/Sidebar";
import { ListProdutos } from "../componentes/ListProdutos";
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
      </div>
    );
  }
}

export default Produtos;
