import "../styles/login.css";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div className="login-g">
      <form className="login-form">
        <span className="material-icons">
          <MdLock />
        </span>
        <input type="text" placeholder="E-mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" placeholder="Password" required />
        <button onClick={() => loginWithRedirect()}>login</button>
        <button onClick={() => logout({ returnTo: window.location.origin })}> </button>
        <Link to="/Produtos">Não é cadastrado? Crie uma conta.</Link>
      </form>
    </div>
  );
};

export default Login;
