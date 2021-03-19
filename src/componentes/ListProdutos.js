import React, { Component } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import "../styles/listProdutos.css";

//Função que renderiza o objeto individual
function ListItem(props) {
  return (
    <li>
      <div className="btn-div">
        <button className="btn">
          <RiHeartAddLine className="btn-icon" size="1.5rem" color="#ff2724" />
        </button>
      </div>
      <div className="img">image {props.value.img}</div>
      <div className="description">Descrição {props.value.description}</div>
      <div className="price">R$ {props.value.price}</div>
    </li>
  );
}
//função que percorrer o vetor
function NumberList(props) {
  const products = props.products;
  return (
    <ul>
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
    img: "img 01",
    description: "description 01",
    price: "55,99",
  },
  { id: "02", img: "img 02", description: "description 02", price: "100,00" },
  { id: "03", img: "img 03", description: "description 03", price: "150,00" },
  { id: "04", img: "img 04", description: "description 04", price: "200,00" },
  { id: "05", img: "img 05", description: "description 05", price: "250,00" },
  { id: "06", img: "img 06", description: "description 06", price: "300,00" },
];

export class ListProdutos extends Component {
  render() {
    return (
      <div className="total-list">
        <div className="propaganda">PROAGANDA</div>
        <NumberList products={products} />
      </div>
    );
  }
}

export default ListProdutos;
