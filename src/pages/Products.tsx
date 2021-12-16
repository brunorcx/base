import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import "../styles/products.css";
import React, { useState, Suspense } from "react";
import Spinner from "../componentes/Spinner";
const ProductList = React.lazy(() => import("../componentes/ProductList"));
const Sidebar = React.lazy(() => import("../componentes/Sidebar"));
export interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const [checkboxCategory, setCheckboxCategory] = useState({});

  return (
    <div>
      <Navbar className="navbar-p" />

      <div className="productsBody">
        <Suspense fallback={<Spinner />}>
          <Sidebar checkboxCategoryFunc={setCheckboxCategory} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <ProductList checkboxCategory={checkboxCategory} />
        </Suspense>
      </div>
      <Footer className="footer-p" />
    </div>
  );
};

export default Products;
//Para usar Suspense é preciso ter um lazy import
