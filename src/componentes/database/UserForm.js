import "../../styles/userForm.css";
import { useState } from "react";
import { Post } from "../../controllers/crud.js";
import { BsUpload } from "react-icons/bs";
import imageCompression from "browser-image-compression";

const UserForm = (props) => {
  const [srcImage, setSrcImage] = useState(); //Vetor de estados
  const [loadedImage, setLoadedImage] = useState(false); //Vetor de estados
  const [imageFile, setImageFile] = useState(null); //Vetor de estados

  async function Register(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("password", document.getElementById("password").value);
    formData.append("email", document.getElementById("email").value);
    const imageCompressed = await ImageCompression(imageFile);
    formData.append("image", imageCompressed);

    Post("/users/images", formData);
  }
  var userFormStyle;
  if (props.newUser) {
    userFormStyle = "openUserForm";
  } else {
    userFormStyle = "closedUserForm";
  }

  function onChangeImageHandler(e) {
    console.log(e.target.files);
    setImageFile(e.target.files[0]);
    setSrcImage(URL.createObjectURL(e.target.files[0]));
    setLoadedImage(true);
  }

  async function ImageCompression(image) {
    if (image != null) {
      const imageFile = image;
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
  }

  return (
    <div className={userFormStyle}>
      <div className="card">
        <h2>Cadastrar Usuário</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <form className="card-form" method="post" encType="multipart/form-data" onSubmit={(e) => Register(e)}>
              <label>Nome</label>
              <input type="text" id="name" name="name" required autoFocus />
              <label>Senha</label>
              <input type="password" id="password" required autoFocus />
              <label>E-mail</label>
              <input type="text" id="email" required autoFocus />
              <button type="submit" className="card-form-button button-ghost">
                {/*TODO: Criar mensagem de usuário criado com sucesso após cadastrar  */}
                Cadastrar
              </button>
            </form>
          </div>
          <div className={!loadedImage ? "load-img" : "loaded-img"}>
            {!loadedImage && <BsUpload size="4rem" />}
            {!loadedImage && "Adicionar Imagem"}
            <input type="file" className="imgInput" name="file" onChange={(e) => onChangeImageHandler(e)} />
            <img src={srcImage} className="imgPreview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
