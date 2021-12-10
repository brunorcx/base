import "../styles/login.css";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-g">
      <form className="login-form">
        <span className="material-icons">
          <MdLock />
        </span>
        <input type="text" placeholder="E-mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" placeholder="Password" required />
        <button>login</button>
        <Link to="/Produtos">Não é cadastrado? Crie uma conta.</Link>
      </form>
    </div>
  );
};

export default Login;
