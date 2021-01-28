import React, { Component } from "react";
import "../styles/home.css";

function Home(props) {
  return <a href='#home' className='site-logo'>{props.nome}</a>
}

const user = {
  nome: 'Rodrigues',
  author: 'Machado'
}

export class Navbar extends Component{
  render(){
    return (
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
  
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