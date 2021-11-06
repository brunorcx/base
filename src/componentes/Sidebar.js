import "../styles/sidebar.css";
import { useState, useEffect } from "react";
import { GetResposta } from "../controllers/crud";

const Sidebar = (props) => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    GetResposta("/products/tags")
      .then((result) => {
        var categorias = [];
        result.forEach((element) => {
          categorias.push(element);
          var categoriaMultipla;
          var index = element.indexOf(","); //Retorna -1 se não encontra
          if (index !== -1) {
            //Contains
            var indexAnt;
            categoriaMultipla = categorias.pop();
            while (index !== -1) {
              categorias.push(categoriaMultipla.substring(0, index));
              categoriaMultipla = categoriaMultipla.substring(index + 1, categoriaMultipla.length);
              indexAnt = index;
              index = categoriaMultipla.indexOf(","); //Retorna -1 se não encontra
            }
            categorias.push(categoriaMultipla);
            categorias = [...new Set(categorias)]; //remover itens duplicados
            setCategorias(categorias);
            // console.log(categorias);
          }
        });
        // console.log(result);
      })
      .catch((err) => {});
  }, []);

  //Função para pegar checkboxes marcados
  function handleChange(e) {
    let isChecked = e.target.checked;
    console.log("Foi checado " + isChecked);
    console.log("id é:" + e.target.id);
    // do whatever you want with isChecked value
  }
  //Aqui é onde as informações do banco são organizadas
  function CategoryList(props) {
    const categorias = props.categorias;
    const listCategories = categorias.map((category) => (
      <li key={category.toString()}>
        <input type="checkbox" id={category.toString()} onChange={(e) => handleChange(e)} />
        {category}
      </li>
    ));
    return <ul>{listCategories}</ul>;
  }

  //Aqui será adicionadas as informações conforme o banco de dados
  // const categorias = ["Apple", "Samsung", "Motorola", "Lenovo", "Sony", "sei la"];
  const cores = ["Branco", "Preto", "Azul", "Vermelho", "Cinza", "Amarelo"];

  return (
    <div className="sidebar">
      {/* Chama a Navbar para Rednderizar nesta pagina e nesta posição */}
      <div>
        <p>Categorias</p>
        <CategoryList categorias={categorias} />
      </div>

      <div className="divider" />

      <div>
        <p>Cor</p>
        <CategoryList categorias={cores} />
      </div>
    </div>
  );
};

export default Sidebar;
