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
    if (!this.state.aberto) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.scroll = "yes"; //Internet Explorer
    }
  }

  //################### FIM APARECER CARRINHO ########################

  //###################### INICIO TOPO SUMIR #########################

  saiuDoTopo() {
    //Verifica a larguara para não ter o efeito de sumir e aparecer no modo mobile
    var largura =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (largura > 768) {
      //Verificar porquê window.pageYOffset dispara tantas vezes
      if (window.pageYOffset === 0) {
        this.setState({ topo: true });
        this.refNavbar2.current.className = "navbar2";
      } else if (window.pageYOffset >= 100) {
        this.setState({ topo: false });
        this.refNavbar2.current.className = "Sumir";
      }
    }
  }
  componentDidMount() {
    window.onscroll = this.saiuDoTopo.bind(this);
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  //######################## FIM SUMIR TOPO ##############################

  render() {
    /* TERMINA AQUI*/

    let carrinho_class = this.state.aberto
      ? "carrinho-menu"
      : "carrinho-menu-fechado";

    let background_cart = this.state.aberto
      ? "background-carrinho-dark"
      : "background-carrinho-dark-fechado";

    const btnMobile = document.getElementById("btn-mobile");
    function toggleMenu() {
      const navbar2 = document.getElementById("navbar2");
      navbar2.classList.toggle("active");
    }

    // btnMobile.addEventListener('click', toggleMenu)

    return (
      <header className="nav">
        <div className="navbar1">
          <div className="logo">
            <button
              className={"btn-mobile"}
              id={"btn-mobile"}
              onClick={toggleMenu}
            >
              <span id="hamburguer" className="hamburguer"></span>
            </button>

            {/*<FaReact size="2rem" color="#1e5bc6" />*/}
          </div>
          {/* 
          <div id="div-search" className="div-search">
            <input type="text" className="search" placeholder="Search"></input>
          </div>
          <div className="lupa">
            <BsSearch className="lupa-icon" size="1.5rem" color="#fff" />
          </div> */}
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
              <Carrinho />
            </div>
          </div>
        </div>

        <div
          className={background_cart}
          onClick={this.abrirCarrinho.bind(this)}
        />

        <div className="linha-horizontal" />
        <div className="navbar2" id={"navbar2"} ref={this.refNavbar2}>
          {/* <AiOutlineMenu className="hamburguer" size="2rem" /> */}
          <ul className={"menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/Usuarios">Usuários</Link>
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
