import { Navbar } from "../componentes/Navbar";
import Sidebar from "../componentes/Sidebar";
import ListProdutos from "../componentes/ListProdutos";
import { Footer } from "../componentes/Footer";
import "../styles/produtos.css";
import React, { useState, Component } from "react";

export interface ProdutosProps {}
const Produtos: React.FC<ProdutosProps> = () => {
  const [categoriaCheckbox, setCategoriaCheckbox] = useState({});

  return (
    <div>
      <Navbar className="navbar-p" />

      <div className="corpo">
        <Sidebar categoriaCheckboxFunc={setCategoriaCheckbox} />
        <ListProdutos categoriaCheckbox={categoriaCheckbox} />
      </div>
      <Footer className="footer-p" />
    </div>
  );
};

export default Produtos;
