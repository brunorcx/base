import React, { Component } from "react";
import "../styles/navbar.css";
import "../styles/shoppingCart.css";
import "../styles/login.css";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";

// let background_cart =
//   this.state.open || this.state.login
//     ? "darkBackgroundCart"
//     : "closedDarkBackgroundCart";

const Navbar = (props) => {
  // const [cart, setcart] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const [toggleCart, settoggleCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [navbar2, setNavbar2] = useState("navbar2");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    //Verifica a largura para não ter o efeito de sumir e aparecer no modo mobile
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width > 768) {
      //Verificar porquê window.pageYOffset dispara tantas vezes
      if (scrollPosition === 0) {
        setNavbar2("navbar2");
      } else if (scrollPosition >= 100) {
        setNavbar2("fade");
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    const nav = document.getElementById("nav");
    if (toggleMenu === true) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  }, [toggleMenu]);
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://authBack/api`,
          scope: "read:users",
        });
        console.log(accessToken);
        const response = await fetch("https://rodriguesdevnode.herokuapp.com/users", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response);
        setPosts(await response.json());
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <header id="nav" className="nav">
      <div className="navbar1">
        <button className="btn-mobile" id="btn-mobile" onClick={() => setToggleMenu(!toggleMenu)}>
          <span id="hamburguer" className="hamburguer"></span>
        </button>
        <div className="logo"></div>
        <div className="rightNav">
          <div className="div-user">
            <HiOutlineUser className="user-icon" size="2rem" />
            <div className="welcome">
              <label className="label-bv">Bem Vindo</label>
              {isLoading ? <label>Loading...</label> : <label> {isAuthenticated ? user.name : "Entrar"}</label>}
            </div>
            <container className="login-container">
              <button className="sign-in" onClick={() => loginWithRedirect()}>
                Entrar
              </button>
              <button className="sign-up" onClick={() => logout()}>
                Cadastrar
              </button>
            </container>
          </div>

          <div>
            <div className="imgCart">
              <AiOutlineShoppingCart className="cartIcon" size="2rem" onClick={() => settoggleCart(!toggleCart)} />
            </div>
          </div>
          <div className={`cart${toggleCart ? "active" : ""}`}>
            <Cart />
          </div>
        </div>
      </div>
      <div
        className={`${toggleCart ? "" : "closed"}darkBackgroundCart`}
        onClick={() => settoggleCart(!toggleCart)}
      ></div>
      <div className="horizontalLine" />
      <div className={navbar2} id={"navbar2"}>
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
};
export default Navbar;
