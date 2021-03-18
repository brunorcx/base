import React, { Component } from "react";
import "../styles/listProdutos.css";

function ListItem(props) {
  return (
    <li>
      <div>image {props.value}</div>
      <div>Descrição {props.value}</div>
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

const elements = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];

export class ListProdutos extends Component {
  render() {
    return (
      <div className="total-list">
        <div className="propaganda">PROAGANDA</div>
        <NumberList numbers={elements} />
      </div>
    );
  }
}

export default ListProdutos;
