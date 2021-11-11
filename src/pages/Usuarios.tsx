import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import { BsSearch } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { MdAddBox } from "react-icons/md";
import { MdIndeterminateCheckBox } from "react-icons/md";

export interface UsuariosProps {}

const Usuarios: React.SFC<UsuariosProps> = () => {
  const [criarUsuario, setCriarUsuario] = useState(false); //Valor dentro da função é valor inicial da variável

  useEffect(() => {
    if (criarUsuario) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      // document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      // document.body.scroll = "yes"; //Internet Explorer
    }
  }, [criarUsuario]); // Apenas re-execute o efeito quando o count mudar
  return (
    <div>
      <Navbar />
      <div className="cUserHeader">
        <div className="cUserHeaderPart1">Cadastro Usuários</div>
        <div className="cUserHeaderPart2">
          <div className="divSearchPequena">
            <input type="text" className="searchPequena" placeholder="Busca"></input>
            <div className="lupa">
              <BsSearch className="lupa-icon" size="1.5rem" color="#fff" />
            </div>
          </div>
          {criarUsuario && (
            <MdIndeterminateCheckBox
              className="blassProuctBtn"
              size="1.5rem"
              color="#fff"
              onClick={() => setCriarUsuario(!criarUsuario)}
            />
          )}
          {!criarUsuario && (
            <MdAddBox
              className="addProdutoBtn"
              size="1.5rem"
              color="#fff"
              onClick={() => setCriarUsuario(!criarUsuario)}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Usuarios;
