import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import DenseTable from "../componentes/tabelaProdutos";
import "../styles/cadastroProdutos.css";
import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import FormProduto from "../componentes/database/FormProduto";

export interface CadastroProdutoProps {}

const CadastroProduto: React.FC<CadastroProdutoProps> = () => {
  const [criarProduto, setCriarProduto] = useState(false); //Valor dentro da função é valor inicial da variável
  console.log(criarProduto);
  // useEffect(() => {
  //   //Executa quando o componente é atualiazado, nesse caso quando criarProduto é modificado
  //   if (criarProduto) {
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.documentElement.style.overflow = "auto";
  //   }
  // }, [criarProduto]);
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
          <MdAddBox
            className="addProdutoBtn"
            size="1.5rem"
            color="#fff"
            onClick={() => setCriarProduto(!criarProduto)}
          />
        </div>
      </div>
      {criarProduto && <FormProduto />}
      <DenseTable />
      <Footer />
    </div>
  );
};

export default CadastroProduto;
