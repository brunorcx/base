import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";
import CProduto from "./pages/CadastroProduto";
import Usuarios from "./pages/Usuarios";

function RoutesFunc() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />}></Route>
        <Route path="/Produto/:id" />
        {/* render={(props) => <Produto {...props} />} /*TODO https://www.youtube.com/watch?v=VD7ojK3deWE * */}
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/CadastroProdutos" element={<CProduto />} />
        {/* <Route path="/pagina2" component={Pagina2}> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesFunc;
