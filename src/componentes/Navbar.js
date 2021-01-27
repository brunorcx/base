import React, { Component } from "react";
import "../styles/home.css";
export class Navbar extends Component {
  render() {
    return (
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
              <a href="#home" className="site-logo">
                logo
              </a>

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

        <div className="intro-area">
          <div className="container">
            <h2>Responsive Navbar with pure JavaScript</h2>
            <p>Please resize your browser and see the result</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
