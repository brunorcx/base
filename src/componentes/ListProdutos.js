import { useState, useEffect } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { GetResposta } from "../controllers/crud";

import "../styles/listProdutos.css";
import { Link } from "react-router-dom";

const ListProdutos = () => {
  const products = [
    {
      id: 0,
      name: "Playstation 5",
      price: 5000,
      brand: "Sony",
      qty: 1,
      img:
        "https://carrefourbr.vtexassets.com/arquivos/ids/7647685-160-160?width=160&height=160&aspect=true",
      tags: "eletrônico, informática",
    },
    {
      id: "01",
      img:
        "https://carrefourbr.vtexassets.com/arquivos/ids/7647685-160-160?width=160&height=160&aspect=true",
      description: "description 01",
      price: "55,99",
    },
    {
      id: "02",
      img:
        "https://carrefourbr.vtexassets.com/arquivos/ids/6090814-160-160?width=160&height=160&aspect=true",
      description: "description 02",
      price: "100,00",
    },
    {
      id: "03",
      img:
        "https://carrefourbr.vtexassets.com/arquivos/ids/11071831-160-160?width=160&height=160&aspect=true",
      description: "description 03",
      price: "150,00",
    },
    {
      id: "04",
      img:
        "https://carrefourbr.vtexassets.com/arquivos/ids/6065545-160-160?width=160&height=160&aspect=true",
      description: "description 04",
      price: "200,00",
    },
    {
      id: "05",
      img:
        "https://carrefourbr.vtexassets.com/arquivos/ids/7737029-160-160?width=160&height=160&aspect=true",
      description: "description 05",
      price: "250,00",
    },
    {
      id: "06",
      img:
        "https://carrefourbr.vtexassets.com/arquivos/ids/12389585-160-160?width=160&height=160&aspect=true",
      description: "description 06",
      price: "300,00",
    },
  ];
  const [products2, setProducts2] = useState(products);
  useEffect(() => {
    GetResposta("/products")
      .then((result) => {
        var tamanho = Object.keys(result).length;

        for (var i = 0; i < tamanho; i++) {
          setProducts2((oldArray) => [
            ...oldArray,
            {
              id: i + 1,
              name: result[i].name,
              price: result[i].price,
              brand: result[i].brand,
              qty: result[i].qty,
              tags: result[i].tags,
              img: result[i].img,
            },
          ]);
        }
      })
      .catch((err) => {});
  }, []);
  //Função que renderiza o objeto individual
  function ListItem(props) {
    return (
      <Link to="/Produto">
        <li className="produtosLI">
          <div className="btn-div">
            <button className="btn">
              <RiHeartAddLine
                className="btn-icon"
                size="1.5rem"
                color="#ff2724"
              />
            </button>
          </div>
          <div className="img">
            <img src={props.value.img}></img>
          </div>
          <div className="description">Descrição {props.value.description}</div>
          <div className="price">R$ {props.value.price}</div>
        </li>
      </Link>
    );
  }

  //função que percorre o vetor
  function NumberList(props) {
    const products = props.products;
    return (
      <ul className="produtosUL">
        {products.map((product) => (
          <ListItem key={product.id} value={product} />
        ))}
      </ul>
    );
  }
  // Um vetor de Objetos que é passado para uma função que irá percorer
  return (
    <div className="total-list">
      <div className="propaganda">PROPAGANDA</div>
      <NumberList products={products2} />
    </div>
  );
};
export default ListProdutos;
