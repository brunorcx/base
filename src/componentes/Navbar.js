import React, { Component } from "react";
import "../styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <a href="#home" className="site-logo">
      {props.nome}
    </a>
  );
}

const user = {
  nome: "Rodrigues",
  author: "Machado",
};

export class Navbar extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
              <Home nome={user.nome} />

              {/* site menu/nav  */}
              <ul>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/service">
                    <AiOutlineShoppingCart size={26} color="#FFFFFF" />
                  </Link>
                </li>
                <li>
                <Link to="/contact">contact</Link>
                </li>
              </ul>

              {/* <!-- nav-toggler for mobile version only --> */}
              <button className="nav-toggler">
                <span></span>
              </button>
            </nav>
          </div>
        </div>
        {/* <!-- navbar-area end --> */}
      </header>
    );
  }
}
export default Navbar;
