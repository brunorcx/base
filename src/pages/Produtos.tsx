import { Navbar } from "../componentes/Navbar";
import { Sidebar } from "../componentes/Sidebar";
import React, { Component } from "react";

export class Produtos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default Produtos;
