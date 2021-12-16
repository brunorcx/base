import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import "../styles/manageProduct.css";
import React, { useState, useEffect } from "react";
import ProductTable from "../componentes/ProductTable";

export interface ManageProductProps {}

const ManageProduct: React.FC<ManageProductProps> = () => {
  const [criarProduto, setCriarProduto] = useState(false); //Valor dentro da função é valor inicial da variável
  const [produtoCriado, setProdutoCriado] = useState(false);
  console.log(produtoCriado);

  useEffect(() => {
    if (criarProduto) {
      // window.onscroll = null;
      document.documentElement.style.overflow = "hidden";
      // document.body.scroll = "no"; //Internet Explorer
    } else {
      document.documentElement.style.overflow = "auto";
      // document.body.scroll = "yes"; //Internet Explorer
    }
  }, [criarProduto]); // Apenas re-execute o efeito quando o count mudar

  useEffect(() => {
    console.log(produtoCriado);
  }, [produtoCriado]);
  return (
    <div>
      <Navbar />
      <ProductTable />
      <Footer />
    </div>
  );
};

export default ManageProduct;
//https://codepen.io/7br_uno/pen/XWMjGaw
