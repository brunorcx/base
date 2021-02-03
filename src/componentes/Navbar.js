import React, { Component } from "react";
import "../styles/navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

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

function menu() {
  return(
    <div className="menu-cascata">
      <p>testing</p>
    </div>
  )
}

export class Navbar extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
              <ul>
                <li>
                  <a href="#" className="menu-navbar" onClick={menu()}>
                    <AiOutlineMenu size={26} color="#ffffff" />
                  </a>
                </li>
              </ul>
              <Home nome={user.nome} />

              {/* site menu/nav  */}
              <ul>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">service</a>
                </li>
                <li>
                  <a href="#">contact</a>
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
