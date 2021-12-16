import React, { Component } from "react";
import "../styles/footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="left">
          <h1>Entre em contato</h1>
          <h2>
            Precisando de um site profissional?
            <br />
            Não perca tempo, Entre em contato, que nós temos a solução ideal para você.
          </h2>
        </div>
        <div className="right">
          <form className="rightForm">
            <input type="text" className="contactName" placeholder="Nome:" />
            <input type="text" className="contactCompany" placeholder="Empresa:" />
            <input type="email" className="contactEmail" placeholder="Email:" />
            <input type="text" className="contactText" placeholder="Escreva sua mensagem aqui" />
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;
