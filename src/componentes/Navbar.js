import React, { Component } from "react";
import "../styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="navbar-logo">
          <FaReact className="logo" size="2rem" />
          <input type="search" className="search" placeholder="Search"></input>
        </div>
        <div className="navbar">
          <AiOutlineMenu className="menu" size="2rem" />
          <ul>
            <li>
              <Link to="/">Produtos</Link>
            </li>
            <li>
              <Link to="/">Usuários</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Navbar;
