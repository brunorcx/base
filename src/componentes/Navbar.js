import React, { Component } from "react";
import "../styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
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

class ExeploDeBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    });
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <div
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          <AiOutlineMenu size={26} color="#ffffff" />
        </div>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

export class Navbar extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
              <div>
              <ExeploDeBlur />
              </div>
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
