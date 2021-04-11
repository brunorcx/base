import React, { Component } from "react";
import "../styles/produto.css";

export class Product extends Component {
  render() {
    return (
      <div className="limite">
        <div className="product">
          <div className="imagens">
            <div className="img-min">
              <ul>
                <li>
                  <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7739079-150-auto?width=150&height=auto&aspect=true" />
                </li>
                <li>
                  <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7739084-150-auto?width=150&height=auto&aspect=true" />
                </li>
                <li>
                  <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7739090-150-auto?width=150&height=auto&aspect=true" />
                </li>
                <li>
                  <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true" />
                </li>
              </ul>
            </div>
            <div className="img-max">
              <img src="http://carrefourbr.vtexassets.com/arquivos/ids/7739079-150-auto?width=150&height=auto&aspect=true" />
            </div>
          </div>
          <div className="infor">
            <h2>
              Smartphone Samsung Galaxy A31 128GB Azul Tela 6.4 Pol. Câmera 48MP
              Selfie 20MP Dual Chip Android 10.0
            </h2>
            <div className="divider" />
            <div className="infor-2">
              <div className="preço">
                <h2>R$1.000,00</h2>
              </div>
              <div className="comprar">
                <p>Comprar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
