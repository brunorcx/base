import "../../styles/formProduto.css";
import { useState, useEffect } from "react";
import { PostProduto } from "../../controllers/crud.js";
import { BiPlus } from "react-icons/bi";

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

  // const [addTag1, setAddTag] = useState(false); //Valor dentro da função é valor inicial da variável
  // function addTag() {
  //   console.log("enter");
  //   return <input type="text" />;
  // }

  return (
    <div className={formProdutoStyle}>
      <div className="card">
        <h2>Cadastrar Produto</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <div className="card-form">
              <label>Nome</label>
              <input
                type="text"
                ref={(ref) => vetorRef.push(ref)}
                // onChange={(e) => pegarInputs(e.target.value)}
              />
              <label>Valor</label>
              <input
                type="number"
                pattern="[0-9]*"
                ref={(ref) => vetorRef.push(ref)}
              />
              <label>Quantidade</label>
              <input type="number" />

              <label>Marca</label>
              <input type="text" />
              <div className="tag-div">
                <label>Categoria</label>
                <BiPlus size="1.4rem" className="plus-tag" />
              </div>
              <input type="text" ref={(ref) => vetorRef.push(ref)} />
            </div>
            <button
              className="card-form-button button-ghost"
              onClick={() => Cadastrar()}
            >
              Cadastrar
            </button>
          </div>
          <div className="load-img">img</div>
        </div>
      </div>
    </div>
  );
};

export default FormProduto;
