import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import ManageProduct from "./pages/ManageProduct";
import Users from "./pages/Users";

function RoutesFunc() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produtos" element={<Products />}></Route>
        <Route path="/Produto/:id" element={<ProductPage />} />
        <Route path="/Usuarios" element={<Users />} />
        <Route path="/CadastroProdutos" element={<ManageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesFunc;
