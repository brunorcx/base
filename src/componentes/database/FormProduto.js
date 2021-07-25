import "../../styles/formProduto.css";
import { useState, useEffect } from "react";
import { PostProduto } from "../../controllers/crud.js";

const FormProduto = (props) => {
  const [cadastrar, setCadastrar] = useState(false);
  const [valores, setValores] = useState([]); //Vetor de estados
  var vetorRef = [];
  var produto = [];

  function Cadastrar() {
    setCadastrar(!cadastrar);

    //For para pegar os elementos no vetor
    //A ordem dos elementos sempre será a mesma

    //Enviar valores para o back
    produto = []; //resetar vetor
    for (let elemento of vetorRef) {
      produto.push(elemento.value);
      console.log(elemento.value);
    }
    PostProduto("/products", produto);
  }

  var formProdutoStyle;
  if (props.novoProduto) {
    formProdutoStyle = "formProdutoAberto";
  } else {
    formProdutoStyle = "formProdutoFechado";
  }
  useEffect(() => {
    console.log(valores);
  }, [valores]);
  return (
    <div className={formProdutoStyle}>
      <div className="img-container"></div>
      <div className="card">
        <h2>Join us!</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <h3>Cadastrar novo produto</h3>
            <div className="card-form">
              <label>Nome</label>
              <input
                type="text"
                ref={(ref) => vetorRef.push(ref)}
                // onChange={(e) => pegarInputs(e.target.value)}
              />
              <label>Valor</label>
              <input type="number" pattern="[0-9]*" ref={(ref) => vetorRef.push(ref)} />
              <label>Categoria</label>
              <input type="text" ref={(ref) => vetorRef.push(ref)} />
            </div>
            <button className="card-form-button button-ghost" onClick={() => Cadastrar()}>
              Cadastrar
            </button>
          </div>
          <div className="col-50 card-cell card-signup">
            <h3>Ainda não tenho uma conta</h3>
            <div className="card-form">
              <label>Name</label>
              <input type="text" />
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
