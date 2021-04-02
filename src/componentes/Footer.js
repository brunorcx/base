import React, { Component } from "react";
import "../styles/footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="contato">
          <p>Progarmadores: Bruno e Gabriel</p>
          <p>Contato</p>
          <p>Sobre Nós</p>
        </div>
      </div>
    );
  }
}

export default Footer;
