import "../../styles/formUsuario.css";
import { useState } from "react";
import { PostProduto } from "../../controllers/crud.js";
import { BsUpload } from "react-icons/bs";
import imageCompression from "browser-image-compression";

const FormUsuario = (props) => {
  const [inputs, setInputs] = useState([]); //Vetor de estados
  const [imagemNome, setImagemNome] = useState(); //Vetor de estados
  const [imagemCarregada, setImagemCarregada] = useState(false); //Vetor de estados
  const [imagemArquivo, setImagemArquivo] = useState(null); //Vetor de estados

  async function Cadastrar(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("password", document.getElementById("password").value);
    formData.append("email", document.getElementById("email").value);
    const imageCompressed = await ImageCompression(imagemArquivo);
    formData.append("image", imageCompressed);

    PostProduto("/users/images", formData);
  }
  var formUsuarioStyle;
  if (props.novoUsuario) {
    formUsuarioStyle = "formUsuarioAberto";
  } else {
    formUsuarioStyle = "formUsuarioFechado";
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
    <div className={formUsuarioStyle}>
      <div className="card">
        <h2>Cadastrar Usuário</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <form className="card-form" method="post" encType="multipart/form-data">
              <label>Nome</label>
              <input type="text" id="name" name="name" required autoFocus />
              <label>Senha</label>
              <input type="text" id="password" required autoFocus />
              <label>E-mail</label>
              <input type="text" id="email" required autoFocus />
              {/* <div className="tag-div">
                <label>Favoritos</label>
                <BiMinus size="1.4rem" className="less-tag" onClick={() => subTag()} />
                <BiPlus size="1.4rem" className="plus-tag" onClick={() => addTag()} />
              </div> 
              <input type="text" id="cat1" />*/}
              <button type="submit" className="card-form-button button-ghost" onClick={(e) => Cadastrar(e)}>
                {/*TODO: Criar mensagem de usuário criado com sucesso após cadastrar  */}
                Cadastrar
              </button>
            </form>
          </div>
          <div className={!imagemCarregada ? "load-img" : "loaded-img"}>
            {!imagemCarregada && <BsUpload size="4rem" />}
            {!imagemCarregada && "Adicionar Imagem"}
            <input type="file" className="inputImagem" name="file" onChange={(e) => onChangeImageHandler(e)} />
            <img src={imagemNome} className="imgPreview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUsuario;
