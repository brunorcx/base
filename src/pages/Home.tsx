import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../styles/home.css";
import { Navbar } from "../componentes/Navbar";
import { Sidebar } from "../componentes/Sidebar";
import { Propaganda } from "../componentes/Propaganda";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Propaganda />
      </div>
    );
  }
}

export default Home;
