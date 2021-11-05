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
    //COPIAR AQUI
    GetResposta("/products/tags")
      .then((result) => {
        var categorias = [];
        result.forEach((element) => {
          categorias.push(element);
          var categoriaMultipla;
          var index = element.indexOf(","); //Retorna -1 se não encontra
          if (index !== -1) {
            //Contains
            var indexAnt;
            categoriaMultipla = categorias.pop();
            while (index !== -1) {
              categorias.push(categoriaMultipla.substring(0, index));
              categoriaMultipla = categoriaMultipla.substring(index + 1, categoriaMultipla.length);
              indexAnt = index;
              index = categoriaMultipla.indexOf(","); //Retorna -1 se não encontra
            }
            categorias.push(categoriaMultipla);
            categorias = [...new Set(categorias)]; //remover itens duplicados
            console.log(categorias);
          }
        });
        console.log(result);
      })
      .catch((err) => {});
    //COPIAR ATÉ AQUI
  }, []);
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
            {/* <img src={`data:image/jpeg;base64,${props.value.img.data}`}></img> */}
            {console.log("<___>")}
            {console.log(props.value.img)}
          </div>
          <div className="description">Descrição {props.value.name}</div>
          <div className="price">R$ {props.value.price}</div>
          {console.log(props.value.tags)}
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
