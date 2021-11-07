import "../styles/sidebar.css";
import { useState, useEffect, useRef } from "react";
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
  const handleChange = (e) => {
    var id = e.target.id;
    var isChecked = e.target.checked;

    // document.getElementById(id)
    console.log(isChecked);
    console.log(id);
    const checkbox = {
      id: id,
      isChecked: isChecked,
    };
    // props.categoriaCheckboxFunc(checkbox);

    // checkboxRef.current.checked = true;
    // setCheckbox(checkbox);
  };
  //Aqui é onde as informações do banco são organizadas
  function CategoryList(props) {
    const categorias = props.categorias;
    const listCategories = categorias.map((category, index) => (
      <li key={category.toString()}>
        <input type="checkbox" id={category.toString()} onClick={(e) => handleChange(e)} />
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
