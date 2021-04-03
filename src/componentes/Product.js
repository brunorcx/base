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
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="img-max">1.2</div>
          </div>
          <div className="infor">2</div>
        </div>
      </div>
    );
  }
}

export default Product;
