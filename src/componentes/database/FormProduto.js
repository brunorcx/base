import "../../styles/formProduto.css";
import { useState, useEffect } from "react";
import { PostProduto } from "../../controllers/crud.js";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";

var limiter = 0;

const FormProduto = (props) => {
  const [cadastrar, setCadastrar] = useState(false);
  const [valores, setValores] = useState([]); //Vetor de estados
  const [inputs, setInputs] = useState([]); //Vetor de estados
  const [imagemNome, setImagemNome] = useState(); //Vetor de estados

  var vetorRef = [];
  var produto = [];

  function Cadastrar() {
    setCadastrar(!cadastrar);

    limiter = 0;
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

  function addTag() {
    if (limiter < 6) {
      limiter++;

      setInputs((oldArray) => [...oldArray, <input type="text" ref={(ref) => vetorRef.push(ref)} />]);
    } else {
      alert("O Limite de categorias é 7");
    }
    console.log(limiter + "Limiter");
  }

  function subTag() {
    if (limiter > 0) {
      limiter--;

      setInputs((oldArray) => [
        oldArray.pop(),
        // <input type="text" ref={() => vetorRef.pop()} />,
        //Bug de não mostrar corretamente os inputs. Ele volta para 2 mesmo removendo 1 só
      ]);
      vetorRef.pop();
      console.log(limiter + "Limiter");
    } else {
      alert("Deve existir no minimo 1 categoria!");
    }
  }

  function onChangeImageHandler(e) {
    console.log(e.target.files);
    setImagemNome(e.target.files[0].name);
  }

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
              <input type="number" pattern="[0-9]*" ref={(ref) => vetorRef.push(ref)} />
              <label>Quantidade</label>
              <input type="number" />

              <label>Marca</label>
              <input type="text" />
              <div className="tag-div">
                <label>Categoria</label>
                <BiMinus size="1.4rem" className="less-tag" onClick={() => subTag()} />
                <BiPlus size="1.4rem" className="plus-tag" onClick={() => addTag()} />
              </div>
              <input type="text" ref={(ref) => vetorRef.push(ref)} />
              {inputs}
            </div>
            <button className="card-form-button button-ghost" onClick={() => Cadastrar()}>
              Cadastrar
            </button>
          </div>
          <div className="load-img">
            <BsUpload size="4rem" />
            Adicionar Imagem
            <p>{imagemNome}</p>
            <input
              type="file"
              className="inputImagem"
              name="file"
              onChange={(e) => onChangeImageHandler(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProduto;
