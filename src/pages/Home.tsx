import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../styles/home.css";
import { Navbar } from "../componentes/Navbar";
import { Sidebar } from "../componentes/Sidebar";
export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        {/* <Sidebar></Sidebar> */}
      </div>
    );
  }
}

export default Home;
