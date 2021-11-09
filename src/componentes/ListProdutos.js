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
  const [produtosAtuais, setProdutosAtuais] = useState([]);
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
    let marcadoAnt = false;
    let prodRemovidos = [];

    //Acrescentar produtos
    for (const categoriaID in props.categoriaCheckbox) {
      if (props.categoriaCheckbox[categoriaID]) {
        //Se categoria marcada(True)
        for (const produto of products2) {
          console.log("produto " + produto.id);
          console.log("produtoID " + produto.tags);
          // console.log("produtoID " + products2[produto].tags);
          let repetido;
          if (produto.tags[0].indexOf(",") != -1) {
            var strArray = produto.tags[0].split(",");
            for (const palavra of strArray) {
              if (palavra == categoriaID) {
                repetido = false;
                //não incluir produtos repetidos
                for (const prod in produtosAtuais) {
                  if (produtosAtuais[prod] === produto) {
                    repetido = true;
                    marcadoAnt = true;
                    break;
                  }
                }
                if (!repetido) produtosFiltrados.push(produto);
                break;
              }
            }
          } else if (produto.tags == categoriaID) {
            repetido = false;
            for (const prod in produtosAtuais) {
              if (produtosAtuais[prod] === produto) {
                repetido = true;
                break;
              }
            }
            if (!repetido) produtosFiltrados.push(produto);
          }
        }
      } else if (props.categoriaCheckbox[categoriaID] === false && produtosAtuais != null) {
        //retirar categoria marcada
        //Retirar produtos
        for (const produto of produtosAtuais) {
          for (const categoriaID in props.categoriaCheckbox) {
            if (props.categoriaCheckbox[categoriaID]) {
              if (produto.tags == categoriaID) {
                prodRemovidos.push(produto);
              }
            }
          }
        }
        if (prodRemovidos.length !== 0) {
          marcadoAnt = true;
          setProdutosAtuais(prodRemovidos);
        }
        //Não alterar produtos atuais
        // let prodRemovidos = [];
        // for (const produto of produtosAtuais) {
        //   if (produto.tags != categoriaID) {
        //     prodRemovidos.push(produto);
        //   }
        // }
        // for (const marcado in props.categoriaCheckbox) {
        //   if (props.categoriaCheckbox[marcado]) {
        //     marcadoAnt = true;
        //     break;
        //   }
        // }
        // setProdutosAtuais(prodRemovidos);
        // setProdutosAtuais(produtosAtuais.filter((item) => item.tags !== categoriaID));
      }
      console.log(props.categoriaCheckbox[categoriaID]);
      console.log(categoriaID);
    }

    if (produtosFiltrados.length !== 0) {
      if (produtosAtuais !== null) {
        if (produtosFiltrados !== prodRemovidos) {
          for (const prod of produtosFiltrados) {
            setProdutosAtuais((old) => [...old, prod]);
          }
        }
      } else {
        setProdutosAtuais(produtosFiltrados);
      }
      // setProducts2(produtosFiltrados);
    } else if (!marcadoAnt) {
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
