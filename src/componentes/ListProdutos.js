import { useState, useEffect } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { GetResposta } from "../controllers/crud";

import "../styles/listProdutos.css";
import { Link } from "react-router-dom";
import Produto from "../pages/Produto";

const ListProdutos = (props) => {
  const products = [
    {
      id: 0,
      name: "Playstation 5",
      price: 5000,
      brand: "Sony",
      qty: 1,
      img: "https://carrefourbr.vtexassets.com/arquivos/ids/7647685-160-160?width=160&height=160&aspect=true",
      tags: "eletrônico, informática",
    },
  ];
  const [products2, setProducts2] = useState(products);
  const [produtosAtuais, setProdutosAtuais] = useState(null);
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

  useEffect(() => {
    let produtosFiltrados = [];
    for (const categoriaID in props.categoriaCheckbox) {
      if (props.categoriaCheckbox[categoriaID]) {
        //Se categoria marcada(True)
        for (const produto in products2) {
          console.log("produto " + produto);
          console.log("produtoID " + products2[produto].tags);
          if (products2[produto].tags == categoriaID) {
            produtosFiltrados.push(products2[produto]);
          }
        }
      }
      console.log(props.categoriaCheckbox[categoriaID]);
      console.log(categoriaID);
    }
    if (produtosFiltrados.length !== 0) {
      setProdutosAtuais(produtosFiltrados);
      // setProducts2(produtosFiltrados);
    } else {
      setProdutosAtuais(null);
    }
  }, [props.categoriaCheckbox]);
  //Função que renderiza o objeto individual
  function ListItem(props) {
    return (
      <Link to="/Produto">
        <li className="produtosLI">
          <div className="btn-div">
            <button className="btn">
              <RiHeartAddLine className="btn-icon" size="1.5rem" color="#ff2724" />
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
      <NumberList products={produtosAtuais ? produtosAtuais : products2} />
    </div>
  );
};
export default ListProdutos;
