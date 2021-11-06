import "../styles/sidebar.css";

const Sidebar = (props) => {
  //Aqui é onde as informações do banco são organizadas
  function CategoryList(props) {
    const categorias = props.categorias;
    const listCategories = categorias.map((category) => (
      <li key={category.toString()}>
        <input type="checkbox" id={category.toString()} />
        {category}
      </li>
    ));
    return <ul>{listCategories}</ul>;
  }

  //Aqui será adicionadas as informações conforme o banco de dados
  const categorias = ["Apple", "Samsung", "Motorola", "Lenovo", "Sony", "sei la"];
  const cores = ["Branco", "Preto", "Azul", "Vermelho", "Cinza", "Amarelo"];

  return (
    <div className="sidebar">
      {/* Chama a Navbar para Rednderizar nesta pagina e nesta posição */}
      <div>
        <p>Marcas</p>
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
