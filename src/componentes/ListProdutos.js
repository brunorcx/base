import React, { Component } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import "../styles/listProdutos.css";
import { Link } from "react-router-dom";
import Produto from "../componentes/database/Produto";

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
const products = [
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

export class ListProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  // callAPI() {
  //   fetch("http://localhost:3030/users")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result,
  //         });
  //       },
  //       // Nota: É importante lidar com os erros aqui
  //       // em vez de um bloco catch() para não recebermos
  //       // exceções de erros dos componentes.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  componentWillMount() {
    // this.callAPI();
  }
  render() {
    const { error, isLoaded, items } = this.state;
    console.log("##############" + items);
    if (error) {
      return <div>Error: {error.message}</div>;
      // else if (!isLoaded) {
    } else if (isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="total-list">
          {/* <ul>
            <li>{items[0].title}</li>
            <li>{items[1].title}</li>
          </ul> */}
          <ul>
            <Produto heading="Usuários" url="/users" method="GET" />
            {items.map((item) => (
              <li key={item._id}>
                {item.title + " "}
                {"[" + item.genres + "] "}
                {item._id}
              </li>
            ))}
          </ul>
          <div className="propaganda">PROPAGANDA</div>
          <NumberList products={products} />
        </div>
      );
    }
  }
}

export default ListProdutos;
