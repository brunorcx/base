import "../styles/produto.css";
import { useState, useEffect } from "react";
import { GetResposta } from "../controllers/crud";
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  useEffect(() => {
    GetResposta("/products/" + id)
      .then((result) => {
        setProduto(result);
      })
      .catch((err) => {});
  }, []);
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
              <li>
                <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true" />
              </li>
              <li>
                <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true" />
              </li>
              <li>
                <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true" />
              </li>
            </ul>
          </div>
          <div className="img-max">
            {
              <img
                src={
                  produto
                    ? produto.img
                    : "http://carrefourbr.vtexassets.com/arquivos/ids/7739079-150-auto?width=150&height=auto&aspect=true"
                }
                alt={produto ? produto.name : "alt"}
              />
            }
          </div>
        </div>
        <div className="infor">
          <h1>
            {produto
              ? produto.name
              : " Smartphone Samsung Galaxy A31 128GB Azul Tela 6.4 Pol. Câmera 48MP Selfie 20MP Dual Chip Android 10.0"}
          </h1>
          <div className="divider" />
          <div className="infor-2">
            <div className="preço">
              <h2>{produto ? "R$" + produto.price : "R$1.000,00"}</h2>
            </div>
          </div>
          <div className="comprar">
            <p>Comprar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
