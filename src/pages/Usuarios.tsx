import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import { BsSearch } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { MdAddBox } from "react-icons/md";
import { MdIndeterminateCheckBox } from "react-icons/md";
import TabelaUser from "../componentes/TabelaUser";

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
      <TabelaUser />
      <Footer />
    </div>
  );
};

export default Usuarios;
