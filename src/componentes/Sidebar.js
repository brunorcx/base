import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Navbar } from "./Navbar";
import "../styles/sidebar.css";

//Aqui será adicionadas as informações conforme o banco de dados
function Bloco(props) {
  return (
    <div>
      <h2>Categoria</h2>
      <p>
        <input type="checkbox" /> {props.categoria}
      </p>
      <h2>Cor</h2>

      <p>
        <input type="checkbox" /> {props.cor}
      </p>
      <h2>Modelo</h2>
      <p>
        <input type="checkbox" /> {props.model}
      </p>
    </div>
  );
}

const element = {
  categoria: "Iphone",
  model: "Pro Max 11 XRS",
  cor: "Azul",
};

export class Sidebar extends Component {
  render() {
    return (
      <div className="main">
        {/* Chama a Navbar para Rednderizar nesta pagina e nesta posição */}
        <div className="categoria-area">
          <Bloco
            categoria={element.categoria}
            model={element.model}
            cor={element.cor}
          />
        </div>
        <div className="produtos-area">
          <h1>Area Produtos Alterar no Funturo</h1>
        </div>
      </div>
    );
  }
}

export default Sidebar;
