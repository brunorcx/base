import { Component } from "react";
import "../styles/shoppingCart.css";
import { VscTrash } from "react-icons/vsc";
export class Cart extends Component {
  render() {
    return (
      <section id="page">
        <div className="cHeader">Header</div>
        {/* <nav>Navigation</nav> */}
        <main>
          Main area
          <ul>
            <li>
              <img
                alt="produto 1"
                src="https://carrefourbr.vtexassets.com/arquivos/ids/24030216-160-160?v=637692975683530000&width=160&height=160&aspect=true"
              ></img>
              <div className="description">
                <p>Nome item 1</p>
                <p>R$ 200</p>
                <p>Quantidade: 1</p>
              </div>
              <VscTrash size="1.5rem" className="trash"></VscTrash>
            </li>
          </ul>
        </main>
        <footer>Footer</footer>
      </section>
    );
  }
}

export default Cart;
