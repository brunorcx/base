import { Navbar } from "../componentes/Navbar";
import { Footer } from "../componentes/Footer";
import Product from "../componentes/Product";
import { Component } from "react";

export class ProductPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
