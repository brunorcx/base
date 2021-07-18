import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import DenseTable from "../componentes/tabelaProdutos";
import "../styles/cadastroProdutos.css";
import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import { useState } from "react";

export interface CadastroProdutoProps {}

const CadastroProduto: React.FC<CadastroProdutoProps> = () => {
  const [criarProduto, setCriarProduto] = useState(false); //Valor dentro da função é valor inicial da variável

  return (
    <div>
      <Navbar />
      <div className="cUserHeader">
        <div className="cUserHeaderPart1">Cadastro Produtos</div>
        <div className="cUserHeaderPart2">
          <div className="divSearchPequena">
            <input type="text" className="searchPequena" placeholder="Search"></input>
            <div className="lupa">
              <BsSearch
                className="lupa-icon"
                onClick={() => setCriarProduto(!criarProduto)}
                size="1.5rem"
                color="#fff"
              />
            </div>
          </div>
          <MdAddBox size="1.5rem" color="#fff" />
        </div>
      </div>
      <DenseTable />
      <Footer />
    </div>
  );
};

export default CadastroProduto;
