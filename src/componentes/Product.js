import "../styles/product.css";
import { useState, useEffect } from "react";
import { Get } from "../controllers/crud";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    Get("/products/" + id)
      .then((result) => {
        setProduct(result);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="limit">
      <div className="product">
        <div className="images">
          <div className="img-min">
            <ul>
              <li>
                <img
                  alt="lado 1"
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/7739079-150-auto?width=150&height=auto&aspect=true"
                />
              </li>
              <li>
                <img
                  alt="lado 2"
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/7739084-150-auto?width=150&height=auto&aspect=true"
                />
              </li>
              <li>
                <img
                  alt="lado 3"
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/7739090-150-auto?width=150&height=auto&aspect=true"
                />
              </li>
              <li>
                <img
                  alt="lado 4"
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true"
                />
              </li>
              <li>
                <img
                  alt="lado 5"
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true"
                />
              </li>
              <li>
                <img
                  alt="lado 6"
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true"
                />
              </li>
              <li>
                <img
                  alt="lado 7"
                  src="https://carrefourbr.vtexassets.com/arquivos/ids/7739094-150-auto?width=150&height=auto&aspect=true"
                />
              </li>
            </ul>
          </div>
          <div className="img-max">
            {
              <img
                src={
                  product
                    ? product.img
                    : "http://carrefourbr.vtexassets.com/arquivos/ids/7739079-150-auto?width=150&height=auto&aspect=true"
                }
                alt={product ? product.name : "alt"}
              />
            }
          </div>
        </div>
        <div className="infor">
          <h1>
            {product
              ? product.name
              : " Smartphone Samsung Galaxy A31 128GB Azul Tela 6.4 Pol. Câmera 48MP Selfie 20MP Dual Chip Android 10.0"}
          </h1>
          <div className="divider" />
          <div className="infor-2">
            <div className="price">
              <h2>{product ? "R$" + product.price : "R$1.000,00"}</h2>
            </div>
          </div>
          <div className="buy">
            <p>Comprar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
