import "../styles/sidebar.css";
import { useState, useEffect } from "react";
import { Get } from "../controllers/crud";

const Sidebar = (props) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Get("/products/tags")
      .then((result) => {
        var categories = [];
        result.forEach((element) => {
          categories.push(element);
          var multipleCategories;
          var index = element.indexOf(","); //Retorna -1 se não encontra
          if (index !== -1) {
            //Contains
            multipleCategories = categories.pop();
            while (index !== -1) {
              categories.push(multipleCategories.substring(0, index));
              multipleCategories = multipleCategories.substring(index + 1, multipleCategories.length);
              index = multipleCategories.indexOf(","); //Retorna -1 se não encontra
            }
            categories.push(multipleCategories);
            categories = [...new Set(categories)]; //remover itens duplicados

            setCategories(categories);
            // console.log(categorias);
          }
        });
      })
      .catch((err) => {});
  }, []);

  //Função para pegar checkboxes marcados

  const HandleChange = (e) => {
    setCheckedItems({ ...checkedItems, [e.target.id]: e.target.checked });
  };

  useEffect(() => {
    props.checkboxCategoryFunc(checkedItems);
  }, [checkedItems]);

  //Aqui é onde as informações do banco são organizadas
  function CategoryList(props) {
    const categories = props.categories;
    const listCategories = categories.map((category) => (
      <li key={category.toString()}>
        <input
          type="checkbox"
          id={category.toString()}
          onChange={(e) => HandleChange(e)}
          checked={checkedItems[category]}
        />
        {category}
      </li>
    ));
    return <ul>{listCategories}</ul>;
  }

  //Aqui será adicionadas as informações conforme o banco de dados
  // const categorias = ["Apple", "Samsung", "Motorola", "Lenovo", "Sony", "sei la"];
  const colors = ["Branco", "Preto", "Azul", "Vermelho", "Cinza", "Amarelo"];

  return (
    <div className="sidebar">
      {/* Chama a Navbar para Rednderizar nesta pagina e nesta posição */}
      <div>
        <p>Categorias</p>
        <CategoryList categories={categories} />
      </div>

      <div className="divider" />

      {/* <div>
        <p>Cor</p>
        <CategoryList categories={colors} />
      </div> */}
    </div>
  );
};

export default Sidebar;
