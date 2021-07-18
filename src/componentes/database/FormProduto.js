import "../../styles/formProduto.css";
import Produto from "./Produto";
import { useState, useEffect } from "react";

const FormProduto = () => {
  const [cadastrar, setCadastrar] = useState(false);
  const [valores, setValores] = useState([]); //Vetor de estados
  useEffect(() => {
    console.log(valores);
  }, [valores]);
  return (
    <div className="formProduto">
      <div className="img-container"></div>
      <div className="card">
        <h2>Join us!</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <h3>Cadastrar novo produto</h3>
            <div className="card-form">
              <label>Nome</label>
              <input type="text" onChange={(e) => setValores((valores) => [e.target.value])} />
              <label>Valor</label>
              <input
                type="number"
                pattern="[0-9]*"
                inputmode="numeric"
                onChange={(e) => setValores((valores) => [...valores, e.target.value])}
              />
              <label>Imagem</label>
              <input type="text" onChange={(e) => setValores(() => [e.target.value])} />
            </div>
            <button className="card-form-button button-ghost" onClick={() => setCadastrar(true)}>
              Cadastrar
            </button>
            {cadastrar && <Produto heading="Usuários" url="/users" method="GET" />}
          </div>
          <div className="col-50 card-cell card-signup">
            <h3>I don't have an account yet</h3>
            <div className="card-form">
              <label>Name</label>
              <input type="text" value={valores} />
              <label>E-mail</label>
              <input type="text" />
              <label>Password</label>
              <input type="password" />
              <label>Confirm password</label>
              <input type="password" />
            </div>
            <button className="card-form-button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProduto;
