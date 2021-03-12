import React, { Component } from "react";
import "../styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="limite">
          <div className="navbar-logo">
            <FaReact className="logo" size="2rem" color="#1e5bc6" />
            <div className="div-search">
              <input
                type="text"
                className="search"
                placeholder="Search"
              ></input>
              <div className="lupa">
                <BsSearch className="lupa-icon" size="1.5rem" color="#fff" />
              </div>
            </div>
            <div className="div-user">
              <HiOutlineUser className="user-icon" size="2rem" />
              <div className="bem-vindo">
                <label className="label-bv">Bem Vindo</label>
                <label> Entre</label>
              </div>
            </div>
          </div>
        </div>
        <div className="linha-horizontal" />
        <div className="limite">
          <div className="navbar">
            <AiOutlineMenu className="menu" size="2rem" />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Produtos</Link>
              </li>
              <li>
                <Link to="/">Usuários</Link>
              </li>
              <li>
                <Link to="/">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
export default Navbar;
