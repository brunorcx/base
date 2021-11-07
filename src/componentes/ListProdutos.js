import { useState, useEffect } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { GetResposta } from "../controllers/crud";

import "../styles/listProdutos.css";
import { Link } from "react-router-dom";

const ListProdutos = (props) => {
  console.log(props.categoriaCheckbox);
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
  ];
  const [products2, setProducts2] = useState(products);
  useEffect(() => {
    //Carregar lista de produtos do back
    GetResposta("/products")
      .then((result) => {
        var tamanho = Object.keys(result).length;

        for (let i = 0; i < tamanho; i++) {
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
    //Carregar lista de categorias do back
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
            <img src={props.value.img} className="img1"></img>
          </div>
          <div className="description">Descrição {props.value.name}</div>
          <div className="price">R$ {props.value.price}</div>
        </li>
      </Link>
    );
  }

  useEffect(() => {
    console.log("Props: " + props.categoriaCheckbox.id);
    // products2.map((product, index) => (
    //   if(product.tags === props.categoriaCheckbox[index]) {}
    // ))
  }, [props.categoriaCheckbox]);

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
