import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import "../styles/produtos.css";
import React, { useState, Suspense } from "react";
import Spinner from "../componentes/Spinner";
const ListProdutos = React.lazy(() => import("../componentes/ListProdutos"));
const Sidebar = React.lazy(() => import("../componentes/Sidebar"));
export interface ProdutosProps {}

const Produtos: React.FC<ProdutosProps> = () => {
  const [categoriaCheckbox, setCategoriaCheckbox] = useState({});

  return (
    <div>
      <Navbar className="navbar-p" />

      <div className="corpo">
        <Suspense fallback={<Spinner />}>
          <Sidebar categoriaCheckboxFunc={setCategoriaCheckbox} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <ListProdutos categoriaCheckbox={categoriaCheckbox} />
        </Suspense>
      </div>
      <Footer className="footer-p" />
    </div>
  );
};

export default Produtos;
//Para usar Suspense é preciso ter um lazy import
