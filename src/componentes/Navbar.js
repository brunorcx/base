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

let cart_class = this.state.open ? "shoppingCart" : "closedShoppingCart";
// let login_class = this.state.login ? "login" : "closedLogin";
// let background_cart =
//   this.state.open || this.state.login
//     ? "darkBackgroundCart"
//     : "closedDarkBackgroundCart";

const Navbar = (props) => {
  // const [cart, setcart] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  function toggleCart() {
    const cart = document.querySelector("cart");
    cart.classList.toggle("active");
  }
  return (
    <header id="nav" className="nav">
      <div className="navbar1">
        <button className="btn-mobile" id="btn-mobile">
          <span id="hamburguer" className="hamburguer"></span>
        </button>
        <div className="logo"></div>
        <div className="rightNav">
          <div className="div-user">
            <HiOutlineUser className="user-icon" size="2rem" />
            <div className="welcome">
              <label className="label-bv">Bem Vindo</label>
              <label> {user.name}</label>
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
              <AiOutlineShoppingCart className="cartIcon" size="2rem" />
            </div>
          </div>
          <div className="cart" onClick={toggleCart}>
            <Cart />
          </div>
        </div>
      </div>

      <div className="closedDarkBackgroundCart" />

      <div className="horizontalLine" />
      <div className="navbar2" id={"navbar2"}>
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

// export class Navbar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       open: false,
//       top: true,
//       login: false,
//     };

//     this.refNavbar2 = React.createRef();
//   }

//   OpenLogin() {
//     this.setState({ login: !this.state.login });
//     if (!this.state.login) {
//       //padding para tirar a largura da scrollbar
//       document.documentElement.style = "padding-right:7px; overflow:hidden";
//       document.body.scroll = "no"; //Internet Explorer
//     } else {
//       document.documentElement.style = "padding-right:0px; overflow:auto";
//       document.body.scroll = "yes"; //Internet Explorer
//     }
//   }
//   //################### INICIO APARECER CARRINHO ####################
//   OpenCart() {
//     console.log(this.state.open);
//     this.setState({ open: !this.state.open });
//     if (!this.state.open) {
//       document.documentElement.style = "padding-right:7px; overflow:hidden";
//       document.body.scroll = "no"; //Internet Explorer
//     } else {
//       document.documentElement.style = "padding-right:0px; overflow:auto";
//       document.body.scroll = "yes"; //Internet Explorer
//     }
//   }

//   //################### FIM APARECER CARRINHO ########################

//   //###################### INICIO TOPO SUMIR #########################

//   OffTheTop() {
//     //Verifica a largura para não ter o efeito de sumir e aparecer no modo mobile
//     var width =
//       window.innerWidth ||
//       document.documentElement.clientWidth ||
//       document.body.clientWidth;

//     if (width > 768) {
//       //Verificar porquê window.pageYOffset dispara tantas vezes
//       if (window.pageYOffset === 0) {
//         this.setState({ top: true });
//         this.refNavbar2.current.className = "navbar2";
//       } else if (window.pageYOffset >= 100) {
//         this.setState({ top: false });
//         this.refNavbar2.current.className = "fade";
//       }
//     }
//   }
//   componentDidMount() {
//     window.onscroll = this.OffTheTop.bind(this);
//   }

//   componentWillUnmount() {
//     window.onscroll = null;
//   }

//   //######################## FIM SUMIR TOPO ##############################

//   render() {
//     /* TERMINA AQUI*/

//     let login_class = this.state.login ? "login" : "closedLogin";

//     let cart_class = this.state.open ? "shoppingCart" : "closedShoppingCart";

//     let background_cart =
//       this.state.open || this.state.login
//         ? "darkBackgroundCart"
//         : "closedDarkBackgroundCart";

//     function toggleMenu() {
//       const nav = document.getElementById("nav");
//       nav.classList.toggle("active");
//     }

//     return (
//       <header id="nav" className="nav">
//         <div className="navbar1">
//           <button className="btn-mobile" id="btn-mobile" onClick={toggleMenu}>
//             <span id="hamburguer" className="hamburguer"></span>
//           </button>
//           <div className="logo"></div>
//           <div className="rightNav">
//             <div className="div-user" onClick={this.OpenLogin.bind(this)}>
//               <HiOutlineUser className="user-icon" size="2rem" />
//               <div className="welcome">
//                 <label className="label-bv">Bem Vindo</label>
//                 <label> Entre</label>
//               </div>
//               <container className="login-container">
//                 <button className="sign-in">Entrar</button>
//                 <button className="sign-up">Cadastrar</button>
//               </container>
//             </div>

//             <div>
//               <div className="imgCart">
//                 <AiOutlineShoppingCart
//                   className="cartIcon"
//                   size="2rem"
//                   onClick={this.OpenCart.bind(this)}
//                 />
//               </div>
//             </div>
//             <div className={cart_class}>
//               <Cart />
//             </div>
//             <div className={login_class}>
//               <Login />
//             </div>
//           </div>
//         </div>

//         <div
//           className={background_cart}
//           onClick={
//             this.state.login
//               ? this.OpenLogin.bind(this)
//               : this.OpenCart.bind(this)
//           }
//         />

//         <div className="horizontalLine" />
//         <div className="navbar2" id={"navbar2"} ref={this.refNavbar2}>
//           {/* <AiOutlineMenu className="hamburguer" size="2rem" /> */}
//           <ul className={"menu"}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/Produtos">Produtos</Link>
//             </li>
//             <li>
//               <Link to="/Usuarios">Usuários</Link>
//             </li>
//             <li>
//               <Link to="/CadastroProdutos">Cadastrar Produtos</Link>
//             </li>
//           </ul>
//         </div>
//       </header>
//     );
//   }
// }

// export default Navbar;
