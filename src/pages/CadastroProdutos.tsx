import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import DenseTable from "../componentes/tabelaProdutos";
import "../styles/cadastroProdutos.css";
import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";

export class Produto extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="cUserHeader">
          <div className="cUserHeaderPart1">Cadastro Produtos</div>
          <div className="cUserHeaderPart2">
            <div className="divSearchPequena">
              <input type="text" className="searchPequena" placeholder="Search"></input>
              <div className="lupa">
                <BsSearch className="lupa-icon" size="1.5rem" color="#fff" />
              </div>
            </div>
            <MdAddBox size="1.5rem" color="#fff" />
          </div>
        </div>
        <DenseTable />
        <Footer />
      </div>
    );
  }
}

export default Produto;
//https://material-ui.com/pt/components/tables/
//https://codepen.io/7br_uno/pen/XWMjGaw
