import React, { Component } from "react";
import "../styles/footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="esquerda">
          <h1>Entre em contato</h1>
          <h2>
            Precisando de um site profissional
            <p />
            entre em contato, que nós temos a solução
            <p /> mais apropriada a você.
          </h2>
        </div>
        <div className="direita">
          <input
            type="text"
            className="nome-contato"
            value=""
            placeholder="Nome:"
          />
          <input
            type="text"
            className="nome-contato"
            value=""
            placeholder="Nome:"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
