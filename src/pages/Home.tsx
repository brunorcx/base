import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../styles/home.css";
import { Navbar } from "../componentes/Navbar";
import { Propaganda } from "../componentes/Propaganda";
import { Footer } from "../componentes/Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Propaganda />
        <Footer />
      </div>
    );
  }
}

export default Home;
