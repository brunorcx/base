import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import "../styles/cadastroProdutos.css";
import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import { MdIndeterminateCheckBox } from "react-icons/md";
import TabelaProd from "../componentes/TabelaProd";
import FormProduto from "../componentes/database/FormProduto";

export interface CadastroProdutoProps {}

const CadastroProduto: React.FC<CadastroProdutoProps> = () => {
  const [criarProduto, setCriarProduto] = useState(false); //Valor dentro da função é valor inicial da variável
  const [produtoCriado, setProdutoCriado] = useState(false);
  console.log(produtoCriado);

  useEffect(() => {
    if (criarProduto) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      // document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      // document.body.scroll = "yes"; //Internet Explorer
    }
  }, [criarProduto]); // Apenas re-execute o efeito quando o count mudar

  useEffect(() => {
    console.log(produtoCriado);
  }, [produtoCriado]);
  return (
    <div>
      <Navbar />
      <div className="cUserHeader">
        {/* <div className="cUserHeaderPart1">Cadastro Produtos</div> */}
        <div className="cUserHeaderPart2">
          <div className="divSearchPequena">
            {/* <input
              type="text"
              className="searchPequena"
              placeholder="Busca"
            ></input> */}
            {/* <div className="lupa">
              <BsSearch className="lupa-icon" size="1.5rem" color="#fff" />
            </div> */}
          </div>

          {criarProduto && (
            <MdIndeterminateCheckBox
              className="blassProuctBtn"
              size="1.5rem"
              color="#fff"
              onClick={() => setCriarProduto(!criarProduto)}
            />
          )}
          {!criarProduto && (
            <MdAddBox
              className="addProdutoBtn"
              size="1.5rem"
              color="#fff"
              onClick={() => setCriarProduto(!criarProduto)}
            />
          )}
        </div>
      </div>
      <FormProduto
        novoProduto={criarProduto}
        produtoCriadoF={setProdutoCriado}
        produtoCriado={produtoCriado}
      />
      {criarProduto && (
        <div
          className="background_cadastro"
          onClick={() => setCriarProduto(!criarProduto)}
        />
      )}
      <TabelaProd />
      <Footer />
    </div>
  );
};

export default CadastroProduto;
//https://codepen.io/7br_uno/pen/XWMjGaw
