import React, { Component } from "react";
import "../styles/footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="esquerda">
          <h1>Entre em contato</h1>
          <h2>
            Precisando de um site profissional?
            <br />
            Não perca tempo, Entre em contato, que nós temos a solução ideal
            para você.
          </h2>
        </div>
        <div className="direita">
          <form className="form-dir">
            <input type="text" className="nome-contato" placeholder="Nome:" />
            <input
              type="text"
              className="empresa-contato"
              placeholder="Empresa:"
            />
            <input
              type="email"
              className="email-contato"
              placeholder="Email:"
            />
            <input
              type="text"
              className="texto-contato"
              placeholder="Escreva sua mensagem aqui"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;
