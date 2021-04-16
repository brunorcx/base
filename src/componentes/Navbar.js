import React, { Component } from "react";
import "../styles/navbar.css";
import "../styles/carrinho-menu.css";
import { FaReact } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Carrinho } from "./Carrinho";

export class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      aberto: false,
    };
  }

  abrirCarrinho() {
    this.setState({ aberto: !this.state.aberto });
  }

  render() {
    let carrinho_class = this.state.aberto ? "carrinho-menu" : "carrinho-menu-fechado";
    return (
      <header className="nav">
        <div className="navbar1">
          <FaReact className="logo" size="2rem" color="#1e5bc6" />
          <div id="div-search" className="div-search">
            <input type="text" className="search" placeholder="Search"></input>
          </div>
          <div className="lupa">
            <BsSearch className="lupa-icon" size="1.5rem" color="#fff" />
          </div>
          <div className="navDireita">
            <div className="div-user">
              <HiOutlineUser className="user-icon" size="2rem" />
              <div className="bem-vindo">
                <label className="label-bv">Bem Vindo</label>
                <label> Entre</label>
              </div>
            </div>
            <div>
              <div className="carrinho-img">
                <AiOutlineShoppingCart
                  className="carrinhoCompra"
                  size="2rem"
                  onClick={this.abrirCarrinho.bind(this)}
                />
              </div>
            </div>
            <div className={carrinho_class}>
              <Carrinho></Carrinho>
            </div>
          </div>
        </div>
        <div className="linha-horizontal" />
        <div className="navbar2">
          <AiOutlineMenu className="hamburguer" size="2rem" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/">Usuários</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
