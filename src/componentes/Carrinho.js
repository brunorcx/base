import React, { Component } from "react";
import "../styles/carrinho-menu.css";
import { VscTrash } from "react-icons/vsc";
export class Carrinho extends Component {
  render() {
    return (
      <section id="page">
        <header>Header</header>
        {/* <nav>Navigation</nav> */}
        <main>
          Main area
          <ul>
            <li>
              <img src="https://carrefourbr.vtexassets.com/arquivos/ids/12023333-150-auto?width=150&height=auto&aspect=true"></img>
              <div className="description">
                <p>Nome item 1</p>
                <p>R$ 200</p>
                <p>Quantidade: 1</p>
              </div>
              <VscTrash size="1.5rem" className="lixeira"></VscTrash>
            </li>
          </ul>
        </main>
        <footer>Footer</footer>
      </section>
    );
  }
}

export default Carrinho;
