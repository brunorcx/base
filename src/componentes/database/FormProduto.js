import "../../styles/formProduto.css";
import { useState, useEffect } from "react";
import { PostProduto, GetResposta } from "../../controllers/crud.js";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import { BiSubdirectoryRight } from "react-icons/bi";
import imageCompression from "browser-image-compression";

var limiter = 0;
const FormProduto = (props) => {
  const [cadastrar, setCadastrar] = useState(false);
  const [valores, setValores] = useState([]); //Vetor de estados
  const [inputs, setInputs] = useState([]); //Vetor de estados
  const [imagemNome, setImagemNome] = useState(); //Vetor de estados
  const [imagemCarregada, setImagemCarregada] = useState(false); //Vetor de estados
  const [imagemArquivo, setImagemArquivo] = useState(null); //Vetor de estados

  async function Cadastrar(e) {
    // e.preventDefault();
    //TODO preventDefault apenas para não refresh na pagina e não dar posterrado.
    setCadastrar(!cadastrar);

    let categorias = [];

    categorias.push(document.getElementById("cat1").value);
    for (let i = 0; i < 6; i++) {
      if (document.getElementById("cat0" + i))
        categorias.push(document.getElementById("cat0" + i).value);
    }
    const formData = new FormData();
    formData.append("name", document.getElementById("nome").value);
    formData.append("price", document.getElementById("valor").value);
    formData.append("qty", document.getElementById("qty").value);
    formData.append("brand", document.getElementById("marca").value);
    formData.append("tags", categorias);
    const imageCompressed = await ImageCompression(imagemArquivo);
    formData.append("img", imageCompressed);
    // formData.append("img", imagemArquivo);
    //COMEÇA AQUI
    // const imageFile = imagemArquivo;
    // console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    // const options = {
    //   maxSizeMB: 1,
    //   maxWidthOrHeight: 1024,
    //   useWebWorker: true,
    // };
    // try {
    //   const compressedFile = await imageCompression(imageFile, options);
    //   console.log("compressedFile instanceof Blob", compressedFile instanceof Blob); // true
    //   console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

    //   formData.append("img", compressedFile);
    // } catch (error) {
    //   console.log(error);
    // }
    //TERMINA AQUI

    // let produtoNovo = {
    //   name: document.getElementById("nome").value,
    //   price: document.getElementById("valor").value,
    //   qty: document.getElementById("qty").value,
    //   brand: document.getElementById("marca").value,
    //   tags: categorias,
    //   img: formData,
    // };
    console.log(imagemArquivo);
    // PostProduto("/products", produtoNovo);
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    // console.log(formData.entries());
    PostProduto("/products/images", formData);

    limiter = 0;
    setInputs([]);
    console.log(props.produtoCriado);
    await props.produtoCriadoF(!props.produtoCriado);
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

      setInputs((oldArray) => [
        ...oldArray,
        <div className="extra-tag" id={limiter} key={limiter} autofocus>
          <BiSubdirectoryRight size="1.4rem" className="enter-tag" />
          <input key={"cat0" + limiter} type="text" id={"cat0" + limiter} required autofocus />
        </div>,
      ]);
    } else {
      alert("O Limite de categorias é 7");
    }
    console.log(inputs);
    console.log(limiter + "Limiter");
  }

  function subTag() {
    if (limiter > 0) {
      setInputs(inputs.filter((item) => item.props.id !== limiter));
      limiter--;
      // setInputs(inputs.filter((item) => item.props.id !== limiter));
    } else {
      alert("Deve existir no minimo 1 categoria!");
    }
    console.log(inputs);
    console.log(limiter + "Limiter");
  }

  function onChangeImageHandler(e) {
    console.log(e.target.files);
    setImagemArquivo(e.target.files[0]);
    setImagemNome(URL.createObjectURL(e.target.files[0]));
    setImagemCarregada(true);
  }

  async function ImageCompression(image) {
    const imageFile = image;
    // const imageFile = imagemArquivo;
    console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log("compressedFile instanceof Blob", compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

      return compressedFile;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={formProdutoStyle}>
      <div className="card">
        <h2>Cadastrar Produto</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <form className="card-form" method="post" enctype="multipart/form-data">
              <label>Nome</label>
              <input type="text" id="nome" name="name" required autofocus />
              <label>Valor</label>
              <input type="number" id="valor" pattern="[0-9]*" />
              <label>Quantidade</label>
              <input type="number" id="qty" />

              <label>Marca</label>
              <input type="text" id="marca" />
              <div className="tag-div">
                <label>Categoria</label>
                <BiMinus size="1.4rem" className="less-tag" onClick={() => subTag()} />
                <BiPlus size="1.4rem" className="plus-tag" onClick={() => addTag()} />
              </div>
              <input type="text" id="cat1" />
              {inputs}
              <button
                type="submit"
                className="card-form-button button-ghost"
                onClick={(e) => Cadastrar(e)}
              >
                {/*TODO: Criar mensagem de produto criado com sucesso após cadastrar  */}
                Cadastrar
              </button>
            </form>
          </div>
          <div className={!imagemCarregada ? "load-img" : "loaded-img"}>
            {!imagemCarregada && <BsUpload size="4rem" />}
            {!imagemCarregada && "Adicionar Imagem"}
            {/* <p>{imagemNome}</p> */}
            <input
              type="file"
              className="inputImagem"
              name="file"
              onChange={(e) => onChangeImageHandler(e)}
            />
            <img src={imagemNome} className="imgPreview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProduto;
