import React, { Component, useState, useEffect } from "react";
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
  constructor(props) {
    super(props);

    this.state = {
      aberto: false,
      topo: true,
    };

    this.refNavbar2 = React.createRef();
  }

  //################### INICIO APARECER CARRINHO ####################

  abrirCarrinho() {
    console.log(this.state.aberto);
    this.setState({ aberto: !this.state.aberto });
    aberto ? unloadScrollBars : reloadScrollBars;
  }

  //################### FIM APARECER CARRINHO ########################

  //###################### INICIO TOPO SUMIR #########################

  saiuDoTopo() {
    //Verificar porquê window.pageYOffset dispara tantas vezes
    if (window.pageYOffset === 0) {
      this.setState({ topo: true });
      this.refNavbar2.current.className = "navbar2";
    } else if (window.pageYOffset >= 100) {
      this.setState({ topo: false });
      this.refNavbar2.current.className = "Sumir";
    }
  }
  componentDidMount() {
    console.log("Montando " + this.state.topo);
    window.onscroll = this.saiuDoTopo.bind(this);
  }

  componentWillUnmount() {
    console.log("Tirando " + this.state.topo);
    window.onscroll = null;
  }

  //######################## FIM SUMIR TOPO ##############################

  //################### INICIO BLOQUEIO DE SCROLL ##################################

  unloadScrollBars() {
    window.document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no"; //Internet Exploresr
  }

  reloadScrollBars() {
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes"; //Internet Exploresr
  }

  //################### FIN BLOQUEIO DE SCROLL #############################

  render() {
    /* TERMINA AQUI*/

    let carrinho_class = this.state.aberto
      ? "carrinho-menu"
      : "carrinho-menu-fechado";

    let background_cart = this.state.aberto
      ? "background-carrinho-dark"
      : "background-carrinho-dark-fechado";

    return (
      <header className="nav">
        <div className="navbar1">
          <div className="logo">
            <FaReact size="2rem" color="#1e5bc6" />
          </div>

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

        <div
          className={background_cart}
          onClick={this.abrirCarrinho.bind(this)}
        />

        <div className="linha-horizontal" />
        <div className="navbar2" ref={this.refNavbar2}>
          {/* <AiOutlineMenu className="hamburguer" size="2rem" /> */}
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
              <Link to="/CadastroProdutos">Cadastrar Produtos</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
