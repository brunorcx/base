import "../../styles/productForm.css";
import { useState } from "react";
import { Post } from "../../controllers/crud.js";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import { BiSubdirectoryRight } from "react-icons/bi";
import imageCompression from "browser-image-compression";

var limiter = 0;
const ProductForm = (props) => {
  const [register, setRegister] = useState(false);
  const [inputs, setInputs] = useState([]); //Vetor de estados
  const [srcImage, setSrcImage] = useState(); //Vetor de estados
  const [loadedImage, setLoadedImage] = useState(false); //Vetor de estados
  const [imageFile, setImageFile] = useState(null); //Vetor de estados

  async function Register(e) {
    e.preventDefault();
    //TODO preventDefault apenas para não refresh na pagina e não dar posterrado.
    setRegister(!register);

    let categories = [];

    categories.push(document.getElementById("cat1").value);
    for (let i = 0; i < 6; i++) {
      if (document.getElementById("cat0" + i)) categories.push(document.getElementById("cat0" + i).value);
    }
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("price", document.getElementById("price").value);
    formData.append("qty", document.getElementById("qty").value);
    formData.append("brand", document.getElementById("brand").value);
    formData.append("tags", categories);
    const imageCompressed = await ImageCompression(imageFile);
    formData.append("img", imageCompressed);

    console.log(imageFile);
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    Post("/products/images", formData);

    limiter = 0;
    setInputs([]);
    console.log(props.createdProduct);
    await props.createdProductF(!props.createdProduct);
  }

  var productFormStyle;
  if (props.newProduct) {
    productFormStyle = "OpenProductForm";
  } else {
    productFormStyle = "ClosedProductForm";
  }

  function addTag() {
    if (limiter < 6) {
      limiter++;

      setInputs((oldArray) => [
        ...oldArray,
        <div className="extra-tag" id={limiter} key={limiter} autoFocus>
          <BiSubdirectoryRight size="1.4rem" className="enter-tag" />
          <input key={"cat0" + limiter} type="text" id={"cat0" + limiter} required autoFocus />
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
    } else {
      alert("Deve existir no minimo 1 categoria!");
    }
    console.log(inputs);
    console.log(limiter + "Limiter");
  }

  function onChangeImageHandler(e) {
    console.log(e.target.files);
    setImageFile(e.target.files[0]);
    setSrcImage(URL.createObjectURL(e.target.files[0]));
    setLoadedImage(true);
  }

  async function ImageCompression(image) {
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

  return (
    <div className={productFormStyle}>
      <div className="card">
        <h2>Cadastrar Produto</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <form className="card-form" method="post" encType="multipart/form-data">
              <label>Nome</label>
              <input type="text" id="name" name="name" required autoFocus />
              <label>Valor</label>
              <input type="number" id="price" pattern="[0-9]*" />
              <label>Quantidade</label>
              <input type="number" id="qty" />

              <label>Marca</label>
              <input type="text" id="brand" />
              <div className="tag-div">
                <label>Categoria</label>
                <BiMinus size="1.4rem" className="less-tag" onClick={() => subTag()} />
                <BiPlus size="1.4rem" className="plus-tag" onClick={() => addTag()} />
              </div>
              <input type="text" id="cat1" />
              {inputs}
              <button type="submit" className="card-form-button button-ghost" onClick={(e) => Register(e)}>
                {/*TODO: Criar mensagem de produto criado com sucesso após cadastrar  */}
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

export default ProductForm;
